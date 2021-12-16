import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  gap: 5px;

  button,
  select {
    width: 40px;
    height: 32px;
    border: 0;
    outline: 0;
    text-align: center;
    border-radius: 4px;
    font-size: var(--dark);
    background: var(--white);
  }
`
