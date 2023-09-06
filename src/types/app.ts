export interface TransformValues {
  rotate: number
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
}

export interface InputRangeType {
  id: string
  label: string
  defaultValue: number
  currentValue: number
  min: number
  max: number
  step: number
  handleValueChange: (newValue: number) => void
  handleResetField: (newDefaultValue: number) => void
}

export interface GeneratedStyleType {
  transform: string
}
