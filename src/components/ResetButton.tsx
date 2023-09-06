import { ResetTypeProps } from '../types'
import ResetIcon from './icon/ResetIcon'

export default function ResetButton({ handleResetClick }: ResetTypeProps) {
  return (
    <button className="btn-reset-all" onClick={handleResetClick}>
      <ResetIcon />
      Reset to defaults
    </button>
  )
}
