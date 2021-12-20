import { FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import api from '../services/api'

import Characters from '../components/Characters'
import ComicsProps from 'types/comics'

import * as Styled from './styled'
import Pagination from 'components/Pagination'
import Modal from 'components/Modal'
import Input from 'components/Input'

const Home: FC<ComicsProps> = ({ comics }) => {
  const [intensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const pages = Math.ceil(comics.length / intensPerPage)
  const startIndex = currentPage * intensPerPage
  const endIndex = startIndex + intensPerPage
  const currentComics = comics.slice(startIndex, endIndex)

  return (
    <Styled.Container>
      {showModal && (
        <Modal comics={comics} closeModal={() => setShowModal(false)} />
      )}
      <Styled.Wrapper>
        <Styled.TitleWrapper>Busca de personagens</Styled.TitleWrapper>
        <Input />
        <Characters
          comics={currentComics}
          setShowModal={() => setShowModal(true)}
        />
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          setItensPerPage={setItensPerPage}
          currentPage={currentPage}
          intensPerPage={intensPerPage}
        />
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const titleQuery = query.title
  const comics = await api
    .get(
      titleQuery
        ? `/comics?titleStartsWith=${titleQuery}&limit=100`
        : '/comics?limit=100'
    )
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err))

  return {
    props: {
      comics
    }
  }
}
