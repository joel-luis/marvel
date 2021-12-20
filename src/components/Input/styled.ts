import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 40px;
`

export const InputTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  color: var(--dark);
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  background: var(--white);
  border-radius: 4px;
  box-shadow: 0px 6px 12px #00000029;

  input {
    padding: 1rem;
    width: 100%;
    height: 2.5rem;
    border: 0;
    outline: 0;
    margin: 3px 0;
    background: transparent;
    color: var(--dark);

    &::placeholder {
      color: var(--gray-300);
      font-size: 14px;
    }
  }
  ${(props) =>
    props.isFocused &&
    css`
      border: 1.5px solid var(--dark);
    `}

  ${(props) =>
    !props.isFocused &&
    css`
      border: 1.5px solid transparent;
    `}

  svg {
    margin-right: 16px;
    ${(props) =>
      props.isFocused &&
      css`
        fill: 1.5px solid var(--dark);
      `}
  }
`
