import { FC, useState } from 'react'
import Characters from 'components/Characters'

import ComicsProps from 'types/comics'
import Modal from 'components/Modal'

// import { Container } from './styles';

const CharactersList: FC<ComicsProps> = ({ comics }) => {
  const [characterId, setCharacterId] = useState(null)

  return (
    <>
      {comics?.map((comic) => (
        <div key={comic.id}>
          <Characters
            title={comic.title}
            id={comic.id}
            thumbnail={comic.thumbnail}
            series={comic.series}
            onClickCharacter={() => setCharacterId(comic.id)}
          />
          <Modal
            isOpen={Boolean(characterId)}
            onClose={() => setCharacterId(null)}
            title={comic.title}
          />
        </div>
      ))}
    </>
  )
}

export default CharactersList
