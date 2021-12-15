import { FC } from 'react'
import ComicsProps from 'types/comics'

import * as Style from './styled'

const Characters: FC<ComicsProps> = ({ comics }) => {
  return (
    <Style.Wrapper>
      {comics?.map((comics) => {
        return (
          <Style.CardWrapper key={comics.id}>
            <Style.ComicsName>
              <Style.Avatar
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt={comics.title}
              />
              <Style.NameWrapper>{comics.title}</Style.NameWrapper>
            </Style.ComicsName>
            <Style.SeriesWrapper>{comics.series.name}</Style.SeriesWrapper>
          </Style.CardWrapper>
        )
      })}
    </Style.Wrapper>
  )
}

export default Characters
