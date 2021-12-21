import React, { useState, createContext, useContext, ReactNode } from 'react'

type ModalContextProviderProps = {
  children: ReactNode
}

type ModaControlProps = {
  showModal: boolean
  openModal: (content: unknown) => void
  closeModal: () => void
}

const ModalContext = createContext({} as ModaControlProps)

export default function ModalProvider({ children }: ModalContextProviderProps) {
  const [showModal, setShowModal] = useState(false)

  const openModal = (content: unknown) => {
    if (content) return setShowModal(true)
  }
  const closeModal = () => setShowModal(false)

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
