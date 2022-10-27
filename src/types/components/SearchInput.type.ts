export interface SearchInputProps {
  value: string
  placeholder?: string
  onInput?: (value: string) => void
  onKeyDown?: () => void
}
