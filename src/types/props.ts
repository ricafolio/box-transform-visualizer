export interface ResultProps {
  code: string
}

export interface ResultPreviewSectionProps {
  style: {
    transform: string
  }
}

export interface ResetTypeProps {
  handleResetClick: () => void
}

export interface InputRangeProps {
  id: string
  label: string
  min: number
  max: number
  step: number
  defaultValue: number
  currentValue: number
  handleValueChange: Function
  handleResetField: Function
}
