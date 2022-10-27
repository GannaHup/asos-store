export interface TextInputProps {
  canEnter?: boolean
  value: string | number
  customClass?: string
  placeholder?: string
  type?: string
  onInput?: (value: string | number) => void
  onKeyDown?: () => void
}
