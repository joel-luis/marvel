import React, { FC, useEffect } from 'react'

import { Container } from './styled'

type PaginationProps = {
  pages: number
  setCurrentPage: (value: number) => void
  setItensPerPage: (value: number) => void
  currentPage: number
  intensPerPage: number
}

const Pagination: FC<PaginationProps> = ({
  pages,
  setCurrentPage,
  setItensPerPage,
  currentPage,
  intensPerPage
}) => {
  useEffect(() => {
    setCurrentPage(0)
  }, [intensPerPage, setCurrentPage])

  return (
    <Container>
      <select
        value={intensPerPage}
        onChange={(e) => setItensPerPage(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>

      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            style={
              index === currentPage
                ? { backgroundColor: 'var(--blue)', color: 'var(--white)' }
                : { backgroundColor: '' }
            }
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        )
      })}
    </Container>
  )
}

export default Pagination
