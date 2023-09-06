import { GeneratedStyleType, InputRangeType } from "./app"

export interface ResultProps {
  code: string
}

export interface ResultPreviewSectionProps {
  style: GeneratedStyleType
}

export interface ResetTypeProps {
  handleResetClick: () => void
}

export type InputRangeProps = InputRangeType