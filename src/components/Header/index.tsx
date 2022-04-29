import { ClockIcon } from 'components/Icons'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { msToTime } from 'utils/date'
import * as S from './styles'
import { useState } from 'react'

export type HeaderProps = {
  title: string
  author: string
  publicationDate: Date
  timeReading: number
  backgroundUrl: string
  handleOnClick: () => void
}

const Header = ({
  author,
  publicationDate,
  backgroundUrl,
  timeReading,
  title
}: // handleOnClick
HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper backgroundUrl={backgroundUrl}>
      <S.InfoContainer>
        <S.TitleContainer>
          <h1>{title}</h1>
          <p>
            {author} &nbsp;&nbsp; | &nbsp;&nbsp;
            {format(publicationDate, 'dd MMM yyyy', {
              locale: ptBR
            })}
          </p>
        </S.TitleContainer>

        <S.TimeContainer>
          <S.Icon>
            <ClockIcon />
          </S.Icon>
          <p>{msToTime(timeReading)} de leitura</p>
        </S.TimeContainer>

        {/* <S.ArrowWrapperLeft onClick={handleOnClick}>
        <S.ArrowButton />
      </S.ArrowWrapperLeft>

      <S.ArrowWrapperRight onClick={handleOnClick}>
        <S.ArrowButton />
      </S.ArrowWrapperRight> */}
        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.MenuNav>
            <S.Title>Liderança 4.0</S.Title>
            <S.Text>
              Dos impactos do anywhere office às experiências no Metaverso, a
              conexão entre tecnologia, estratégia e pessoas vem reformulando
              relações no ambiente de trabalho e pilares de cultura
              organizacional. Reunidas sob o conceito de Liderança 4.0, as novas
              habilidades essenciais para gestores agora incluem fluência
              digital, empatia, flexibilidade e capacidade para engajar equipes
              em dinâmicas de colaboração. Nesses primeiros packs desenvolvidos
              pela equipe do Li.Lea, você encontrará metodologias, dinâmicas e
              insights valiosos para orientar jornadas de aprendizado dentro
              desse novo contexto profissional. Resultado de uma curadoria feita
              especialmente para consultores e parceiros HSM, o material traz
              uma releitura dinâmica de alguns dos principais movimentos que
              inspiram lideranças inovadoras ao redor do mundo. Leia, assista,
              baixe e compartilhe.
            </S.Text>
          </S.MenuNav>
        </S.MenuFull>
      </S.InfoContainer>
    </S.Wrapper>
  )
}

export default Header
