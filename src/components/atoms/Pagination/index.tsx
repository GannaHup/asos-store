import React from "react"
import Icon from "@/assets/icons"
import { generateListNumber } from "@/utils/generateListNumber"
import { PaginationProps } from "@/types/components/Pagination.type"
import './style.scss'

const Pagination = (props: PaginationProps) => {
  const { currentPage = 8, totalItem, perPage = 48, onSetPage } = props

  const totalPage = Math.floor(totalItem / perPage)
  let layerPage = Math.floor(currentPage / 5)
  const start = ((layerPage * 5) + 1)
  const end = ((layerPage * 5) + 6)
  const layerStart = totalPage <= end ? totalPage - 5 : start
  const layerEnd = totalPage <= end ? totalPage : end
  const pageNumber = generateListNumber(layerEnd, layerStart)

  const onInDecrement = (key: 'increment' | 'decrement') => {
    if (key === 'increment') {
      onSetPage(currentPage + 1)
    } else if (key === 'decrement') {
      onSetPage(currentPage - 1)
    }
  }

  return (
    <div className="pagination">
      <button
        className="button-prev"
        disabled={currentPage <= 1}
        onClick={() => onInDecrement('decrement')}
      >
        <Icon
          name="chevron"
          width={26}
          height={26}
          color="#1a4e5f"
        />
      </button>
      <div className="list-page-number">
        {pageNumber.map((page: number, idx: number) => {
          return (
            <button
              className={Number(currentPage) === page ? 'button-page active': 'button-page'}
              key={idx}
              onClick={() => onSetPage(page)}
            >{page}</button>
          )
        })}
      </div>
      <button
        className="button-next"
        disabled={currentPage >= totalPage}
        onClick={() => onInDecrement('increment')}
      >
        <Icon
          name="chevron"
          width={26}
          height={26}
          color="#1a4e5f"
        />
      </button>
    </div>
  )
}

export default Pagination
