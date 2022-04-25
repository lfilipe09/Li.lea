import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Header from 'components/Header'
import {
  CloseIcon,
  CopyIcon,
  HeartFilledIcon,
  HeartOutlineIcon,
  SlideIcon
} from '../../components/Icons'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import TextChapterOpener from 'components/TextChapterOpener'
import TextContent from 'components/TextContent'
import TextSideColumn from 'components/TextSideColumn'
import { useState } from 'react'
import * as S from './styles'
import QuizBox from 'components/QuizBox'
import quizItems from '../../components/QuizBox/mock'

export type HomeTemplateProps = {
  author: string
  backgroundUrl: string
  publicationDate: Date
  HeaderTitle: string
  items: BannerProps[]
  chaptersLikes: string[]
}

const Home = ({
  author,
  backgroundUrl,
  publicationDate,
  HeaderTitle,
  items,
  chaptersLikes
}: HomeTemplateProps) => {
  const [contentIndexOpened, setContentIndexOpened] = useState(-1)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)
  const [likeButtonClickedIndex, setLikeButtonClickedIndex] = useState<
    number[]
  >([])
  const [newChaptersLikes, setNewChaptersLikes] = useState<number[]>(
    chaptersLikes.map(Number)
  )
  // const [feedbackData, setFeedbackDate] = useState(['.', '.', '.'])

  const updateLikes = async (value: string[]) => {
    try {
      const newChaptersLikes = {
        chapterOneLikes: value[0].toString(),
        chapterTwoLikes: value[1].toString(),
        chapterThreeLikes: value[2].toString()
      }
      const response = await fetch('/api/update-like-amount', {
        method: 'POST',
        body: JSON.stringify(newChaptersLikes)
      })
      console.log(response)
    } catch (err) {
      console.log('Erro ao atualizar likes', err)
    }
  }

  const postFeedback = async (value: string[]) => {
    try {
      console.log('olha o value chegando: ', value)
      const newPostFeedback = {
        lilea_chapter_1_feedback: value[0].toString(),
        lilea_chapter_1_likes: '.',
        lilea_chapter_2_feedback: value[1].toString(),
        lilea_chapter_2_likes: '.',
        lilea_chapter_3_feedback: value[2].toString(),
        lilea_chapter_3_likes: '.'
      }
      const response = await fetch('/api/post-feedback', {
        method: 'POST',
        body: JSON.stringify(newPostFeedback)
      })
      console.log(response)
    } catch (err) {
      console.log('Erro ao atualizar likes', err)
    }
  }

  return (
    <S.Wrapper>
      <MediaMatch lessThan={'medium'}>
        <Menu />
      </MediaMatch>
      <S.HeaderWrapper>
        <Header
          author={author}
          backgroundUrl={backgroundUrl}
          handleOnClick={() => console.log('pass')}
          publicationDate={new Date(publicationDate)}
          timeReading={5000000}
          title={HeaderTitle}
        />
      </S.HeaderWrapper>
      <S.BannerSliderWrapper>
        <S.MenuBannerWrapper>
          <MediaMatch greaterThan={'medium'}>
            <Menu />
          </MediaMatch>
          <BannerSlider
            items={items}
            handleOnClick={(index) => {
              setContentIndexOpened(index)
            }}
          />
        </S.MenuBannerWrapper>
      </S.BannerSliderWrapper>
      {items.map((item, index) => (
        <S.MenuFull
          key={item.title}
          aria-hidden={contentIndexOpened !== index}
          isOpen={contentIndexOpened === index}
        >
          <S.MenuFullClose>
            <S.Icon onClick={() => setContentIndexOpened(-1)}>
              <CloseIcon />
            </S.Icon>
          </S.MenuFullClose>
          <S.WrapperMenuFull>
            <S.ContentWrapper>
              <TextChapterOpener
                author={author}
                numberOfChapter={index + 1}
                publicationDate={new Date(item.publicationDate ?? '')}
                title={item.title}
                urlImage={item.img}
              />
              <TextContent
                content={item.content ?? ''}
                imgUrlsDesktop={item.imgDesktop}
                imgUrlsMobile={item.imgMobile}
                quiz={item.quiz ? <QuizBox items={quizItems} /> : undefined}
              />
            </S.ContentWrapper>
            <S.TextColumnWrapper>
              <TextSideColumn
                key={item.title}
                label={'Feedback'}
                placeholder={'Compartilhe aqui o que achou deste capitulo...'}
                onInput={(value) => {
                  const feedbackData = ['.', '.', '.']
                  feedbackData[index] = value
                  postFeedback(feedbackData)
                }}
                leftButtonLabel={
                  likeButtonClickedIndex.includes(index)
                    ? (Number(chaptersLikes[index]) + 1).toString()
                    : 'curtir'
                }
                rightButtonLabel={
                  copiedToClipboard ? 'link copiado!' : 'copiar referência'
                }
                handleOnLeftButtonClick={() => {
                  setLikeButtonClickedIndex([...likeButtonClickedIndex, index])
                  const tempChaptersLikes = newChaptersLikes.map(
                    (chapterLike, indexChapter) =>
                      indexChapter === index ? chapterLike + 1 : chapterLike
                  )
                  setNewChaptersLikes(tempChaptersLikes)
                  updateLikes(tempChaptersLikes.map(String))
                }}
                leftButtonIcon={
                  likeButtonClickedIndex.includes(index) ? (
                    <HeartFilledIcon />
                  ) : (
                    <HeartOutlineIcon />
                  )
                }
                rightButtonIcon={copiedToClipboard ? null : <CopyIcon />}
                handleOnRightButtonClick={() => {
                  navigator.clipboard.writeText(item.reference ?? '')
                  setCopiedToClipboard(true)
                  setTimeout(() => {
                    setCopiedToClipboard(false)
                  }, 3000)
                }}
                isLeftButtonOutline={
                  likeButtonClickedIndex.includes(index) ? false : true
                }
                isRightButtonOutline={true}
                bottomButtonLabel={'adicionar conteúdo ao meu slide'}
                bottomButtonIcon={<SlideIcon />}
                urlLinkBottomButtonClick={item.link ?? '/'}
              />
            </S.TextColumnWrapper>
          </S.WrapperMenuFull>
        </S.MenuFull>
      ))}
    </S.Wrapper>
  )
}

export default Home
