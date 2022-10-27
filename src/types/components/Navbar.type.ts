export interface NavbarProps {
  value: string
  placeholder?: string
  onInput?: (value: string | number) => void
  onSearch?: () => void
  onFilter: () => void
}
