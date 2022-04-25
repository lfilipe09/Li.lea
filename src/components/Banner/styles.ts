import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  /* ${({ theme }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `} */
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  ${media.greaterThan('medium')`
      height: 20rem;
    `}
`

export const Ribbon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.white};
    z-index: 1;
    top: 1.5rem;
    left: 1.5rem;
    background-color: ${theme.colors.green};
    padding: 1px 10px 1px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    box-shadow: 0px 0px 10px #7616fa;
    font-size: ${theme.font.sizes.xsmall};
  `}
`
