import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  format: string
  content?: string
  handleOnClick?: () => void
  publicationDate?: string
  reference?: string
  link?: string
  imgDesktop?: string[]
  imgMobile?: string[]
  quiz?: boolean
}

const Banner = ({ img, title, format, handleOnClick }: BannerProps) => (
  <>
    <S.Wrapper onClick={handleOnClick}>
      <S.Ribbon>{format.toUpperCase()}</S.Ribbon>
      <S.ImageWrapper>
        <S.Image src={img} alt={title} />
      </S.ImageWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
    </S.Wrapper>
  </>
)

export default Banner
