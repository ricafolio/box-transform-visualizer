import ResetIcon from './icon/ResetIcon'

interface ResetType {
  handleResetClick: () => void
}

export default function ResetButton({ handleResetClick }: ResetType) {
  return (
    <button className="btn-reset-all" onClick={handleResetClick}>
      <ResetIcon />
      Reset to defaults
    </button>
  )
}
