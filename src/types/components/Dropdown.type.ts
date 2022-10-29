export interface Options {
  label: string
  value: string
}

export interface DropdownSelectProps {
  value: Options
  options: Options[]
  customClass?: string
  onSelectOption?: (option: Options) => void
}
