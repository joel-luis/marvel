import { useEffect, useState, FC } from 'react'
import api from '../../services/api'

import * as Style from './styled'

type SerieProps = {
  name: string
  resourceURI: string
}

interface ResponseData {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  series?: {
    items?: SerieProps[]
  }
}

const Characters: FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([])

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setCharacters(response.data.data.results))
      .catch((err) => console.log(err, 'erro'))
  }, [])

  return (
    <Style.Wrapper>
      {characters.map((character) => {
        return (
          <Style.CardWrapper key={character.id}>
            <Style.Avatar
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <Style.NameWrapper>{character.name}</Style.NameWrapper>
            {character?.series?.items?.map((serie) => {
              console.log(serie.name)
              return (
                <Style.SeriesWrapper key={serie.resourceURI}>
                  {serie.name}
                </Style.SeriesWrapper>
              )
            })}
          </Style.CardWrapper>
        )
      })}
    </Style.Wrapper>
  )
}

export default Characters
