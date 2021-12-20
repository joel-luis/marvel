import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { FaSistrix } from 'react-icons/fa'

import * as Styled from './styled'

const Input: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const hanldeInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>Nome do personagem</Styled.InputTitle>
      <Styled.Input isFocused={isFocused}>
        <input
          type="text"
          placeholder="Search"
          onFocus={hanldeInputFocus}
          onBlur={handleInputBlur}
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value)
            router.push({
              pathname: '/',
              query: { title: ev.target.value }
            })
          }}
        />
        <FaSistrix size="24px" color="var(--gray-300)" />
      </Styled.Input>
    </Styled.InputWrapper>
  )
}

export default Input
