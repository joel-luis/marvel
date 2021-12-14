import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  max-width: 1140px;
  margin: 5px 20px;
  background: var(--white);
  border-radius: 4px;
  box-shadow: 0px 6px 12px #00000029;

  color: var(--gray-700);
  font-weight: bold;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 90%;
  }
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 0 25px;
`

export const NameWrapper = styled.div`
  color: var(--gray-700);
  font-weight: bold;
`

export const SeriesWrapper = styled.div`
  color: var(--gray-700);
  font-weight: normal;
  font-size: 12px;
`
