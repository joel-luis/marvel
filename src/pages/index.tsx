import { FC } from 'react'
import { GetStaticProps } from 'next'
import api from '../services/api'

import Characters from '../components/Characters'
import ComicsProps from 'types/comics'

const Home: FC<ComicsProps> = ({ comics }) => {
  return <Characters comics={comics} />
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const comics = await api
    .get('/comics')
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err))

  return {
    props: {
      comics
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
