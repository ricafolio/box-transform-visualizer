interface ResultPreviewSectionProps {
  style: {
    transform: string
  }
}

export default function ResultPreviewSection({ style }: ResultPreviewSectionProps) {
  return (
    <div className="box-container">
      <div className="box" style={style}>
        <div className="box-text">Your Box</div>
      </div>
    </div>
  )
}
