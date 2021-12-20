import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1140px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 90%;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  font-size: 2rem;
  color: var(--dark);
  margin: 40px 0 1rem 0;
  font-weight: bold;
`
