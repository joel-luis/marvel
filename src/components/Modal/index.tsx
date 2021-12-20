import React, { FC } from 'react'
import { useModal } from 'context/modalContext'

import * as Styled from './styled'

const Modal: FC = () => {
  const { closeModal } = useModal()

  return (
    <Styled.ModalBackground onClick={closeModal}>
      <Styled.ModalWrapper>olá</Styled.ModalWrapper>
    </Styled.ModalBackground>
  )
}

export default Modal
