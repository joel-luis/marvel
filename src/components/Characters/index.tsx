import { FC } from 'react'
import CharactersProps from 'types/characters'

import * as Style from './styled'

const Characters: FC<CharactersProps> = ({ characters }) => {
  return (
    <Style.Wrapper>
      {characters?.map((character) => {
        return (
          <Style.CardWrapper key={character.id}>
            <Style.Avatar
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <Style.NameWrapper>{character.name}</Style.NameWrapper>
            {character.series.items.map((serie) => {
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
