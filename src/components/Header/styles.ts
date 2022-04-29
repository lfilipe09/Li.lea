import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundUrl }) => css`
    /* position: relative; */
    border-radius: 2rem;
    background-image: url(${backgroundUrl});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    ${media.greaterThan('huge')`
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: animatedBackground 5s;

    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
    

    @keyframes animatedBackground  {
      0% {background-position: 0 -200px;}
      50% {background-position: -2px -170px;}
      100% {background-position: 0 -200px;}

    `}
    
    }
  `}
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    h1 {
      font-weight: ${theme.font.bold};
      ${media.greaterThan('medium')`
        font-size: 8rem;
        margin: 1rem auto;
        line-height: 7rem;
      `}
      ${media.lessThan('medium')`
        margin-top: 2rem;
        font-size: ${theme.font.sizes.xxxlarge};
        line-height: 4rem;
      `}
    }

    p {
      padding-top: 10px;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
  `}
    }
    ${media.lessThan('medium')`
    padding-left: 2rem;
  `}
  `}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const Icon = styled.div`
  width: 20px;
`
export const Image = styled.img`
  width: 40rem;
  ${media.lessThan('medium')`
    margin: 0 auto;
    margin-top: 2rem;
    width: 30rem;
  `}
`

export const TimeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: 1rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    max-width: 175px;
    padding: 10px;
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
  `}
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.large} ${theme.spacings.large} 0
      ${theme.spacings.large};
    ${media.lessThan('medium')`
    padding: ${theme.spacings.large} ${theme.spacings.large} 0
      0 ;
  `}
  `}
`

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 0;
    border-bottom: 9px solid ${theme.colors.black};
    background-color: transparent;
  `}
`

// export type ArrowWrapperProps = {
//   isLeft?: boolean
// }

export const ArrowWrapperRight = styled.button`
  ${({ theme }) => css`
    border: 0;
    cursor: pointer;
    position: absolute;
    display: flex;
    transform: rotate(90deg);
    right: 35px;
    bottom: 30px;
    background-color: ${theme.colors.white};
    padding: 14px 14px 18px 14px;
    border-radius: 100%;
    ${media.lessThan('medium')`
    bottom: 5px;
    right: 13px;
  `}
  `}
`

export const ArrowWrapperLeft = styled.button`
  ${({ theme }) => css`
    border: 0;
    cursor: pointer;
    position: absolute;
    display: flex;
    transform: rotate(270deg);
    right: 85px;
    bottom: 30px;
    background-color: ${theme.colors.white};
    padding: 14px 14px 18px 14px;
    border-radius: 100%;
    ${media.lessThan('medium')`
    bottom: 5px;
    right: 60px;
  `}
  `}
`

export const Text = styled.div`
  ${media.lessThan('medium')`
    margin-left: 1rem ;
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    ${media.greaterThan('medium')`
        font-size: 8rem;
        line-height: 7rem;
        margin-bottom: 4rem
    `}
    ${media.lessThan('medium')`
        margin-bottom: 2rem;
        margin-left: 1rem ;
        font-size: ${theme.font.sizes.xxxlarge};
        line-height: 4rem;
      `}
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    grid-gap: 2rem;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};

        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.alwaysOnTop};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      justify-content: center;
      flex: 1;
      flex-direction: column;
      max-width: 90rem;
      margin: 0 auto;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
