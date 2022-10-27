export interface TextInputProps {
  canEnter?: boolean
  value: string
  customClass?: string
  placeholder?: string
  onInput?: (value: string) => void
  onKeyDown?: () => void
}
