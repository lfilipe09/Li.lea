import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const InfoWrapper = styled.div`
  h1 {
    line-height: 3.7rem;
    margin: 2rem 0;
    ${media.greaterThan('medium')`
      font-size: 5rem;
      line-height: 5rem;
    `}
  }

  div {
    margin: 2rem 0;
  }
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;
    border-radius: ${theme.border.radius};
    object-fit: cover;
    background-position: center center;
    background-repeat: no-repeat;
    ${media.greaterThan('medium')`
      height: 40rem;
    `}
  `}
`
