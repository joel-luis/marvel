import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 88px;
  margin: 5px 0;
  background: var(--white);
  border-radius: 4px;
  box-shadow: 0px 6px 12px #00000029;

  color: var(--gray-700);
  font-weight: bold;
  align-items: center;
`

export const ComicsName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const SeriesWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  color: var(--gray-700);
  font-weight: normal;
  font-size: 12px;
  justify-content: center;
`
