import { FC } from 'react'
import { GetStaticProps } from 'next'
import api from '../services/api'

import Characters from '../components/Characters'
import CharactersProps from 'types/characters'

const Home: FC<CharactersProps> = ({ characters }) => {
  return <Characters characters={characters} />
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const characters = await api
    .get('/characters')
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err))

  return {
    props: {
      characters
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
