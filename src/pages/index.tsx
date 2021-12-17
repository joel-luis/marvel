import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import api from '../services/api'
import { useRouter } from 'next/router'

import Characters from '../components/Characters'
import ComicsProps from 'types/comics'
import { FaSistrix } from 'react-icons/fa'

import * as Styled from './styled'
import Pagination from 'components/Pagination'

const Home: FC<ComicsProps> = ({ comics }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')
  const [intensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(comics.length / intensPerPage)
  const startIndex = currentPage * intensPerPage
  const endIndex = startIndex + intensPerPage
  const currentComics = comics.slice(startIndex, endIndex)

  const router = useRouter()

  const hanldeInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>Busca de personagens</Styled.TitleWrapper>
      <Styled.InputWrapper>
        <Styled.InputTitle>Nome do personagem</Styled.InputTitle>
        <Styled.Input isFocused={isFocused}>
          <input
            type="text"
            placeholder="Search"
            onFocus={hanldeInputFocus}
            onBlur={handleInputBlur}
            value={search}
            onChange={(ev) => {
              setSearch(ev.target.value)
              router.push({ pathname: '/', query: { title: ev.target.value } })
            }}
          />
          <FaSistrix size="24px" color="var(--gray-300)" />
        </Styled.Input>
      </Styled.InputWrapper>
      <Characters comics={currentComics} />
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        setItensPerPage={setItensPerPage}
        currentPage={currentPage}
        intensPerPage={intensPerPage}
      />
    </Styled.Wrapper>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const title = query.title
  const comics = await api
    .get(title ? `/comics?titleStartsWith=${title}` : '/comics')
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err))

  return {
    props: {
      comics
    }
  }
}
