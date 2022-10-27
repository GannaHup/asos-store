export interface Options {
  label: string
  value: string
}

export interface DropdownSelectProps {
  value: Options
  options: Options[]
  onSelectOption?: (option: Options) => void
}
