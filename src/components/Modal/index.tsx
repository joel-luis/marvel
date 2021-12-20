import React, { FC } from 'react'

import ComicsProps from 'types/comics'

import * as Styled from './styled'

const Modal: FC<ComicsProps> = ({ comics, closeModal }) => {
  return (
    <Styled.ModalBackground onClick={closeModal}>
      {comics.map((comic) => {
        return (
          <Styled.ModalWrapper key={comic.id}>
            {comic.title}
          </Styled.ModalWrapper>
        )
      })}
    </Styled.ModalBackground>
  )
}

export default Modal
