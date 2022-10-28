export interface PaginationProps {
  currentPage: number
  totalItem: number
  perPage: number
  onSetPage: (numberPage: number) => void
}
