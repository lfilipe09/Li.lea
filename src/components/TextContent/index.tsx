import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
  imgUrlsDesktop?: string[]
  imgUrlsMobile?: string[]
  quiz?: JSX.Element
  buttonUrl?: string
}

const TextContent = ({
  title,
  content,
  imgUrlsDesktop,
  imgUrlsMobile,
  quiz,
  buttonUrl
}: TextContentProps) => (
  <S.Wrapper data-cy="content">
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />

    {!!quiz && <S.QuizWrapper>{quiz}</S.QuizWrapper>}

    {!!imgUrlsDesktop && (
      <MediaMatch greaterThan="medium">
        {imgUrlsDesktop.map((imgUrlDesktop) => (
          <S.Image key={imgUrlDesktop} src={imgUrlDesktop} />
        ))}
      </MediaMatch>
    )}

    {!!imgUrlsMobile && (
      <MediaMatch lessThan="medium">
        {imgUrlsMobile.map((imgUrlMobile) => (
          <S.Image key={imgUrlMobile} src={imgUrlMobile} />
        ))}
      </MediaMatch>
    )}

    {!!buttonUrl && (
      <a href={buttonUrl} target="_blank" rel="noreferrer">
        Acesse aqui o conteúdo na íntegra
      </a>
    )}
  </S.Wrapper>
)

export default TextContent
