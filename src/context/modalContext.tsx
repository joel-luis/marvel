import React, { useState, createContext, useContext, ReactNode } from 'react'

type ModalContextProviderProps = {
  children: ReactNode
}

const ModalContext = createContext({} as any)

export default function ModalProvider({ children }: ModalContextProviderProps) {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
