export type SerieProps = {
  name: string
  resourceURI: string
}

export type ResponseData = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  series: {
    items: SerieProps[]
  }
}

interface CharactersProps {
  characters: ResponseData[]
}

export default CharactersProps
