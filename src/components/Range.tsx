import { ChangeEvent } from 'react';

interface Range {
  id: string
  label: string
  defaultValue: number
  min: number
  max: number
  step: number
  currentValue: number
  onValueChange: ChangeEvent
  handleReset: Function
}

export default function Range(props: Range) {
  const {
    id,
    label,
    defaultValue,
    min,
    max,
    step,
    currentValue,
    onValueChange,
    handleReset
  } = props

  return (
    <div className="field-container">
      <label htmlFor={id}>{label}</label>
      <div className="input-box-container">
        <div className="input-box-left">
          <input type="range" id={id} name={id} min={min} max={max} step={step} value={currentValue} onChange={onValueChange} />
        </div>
        <div className="input-box-right">{currentValue}</div>
        <button onClick={() => handleReset(defaultValue)}>reset</button>
      </div>
    </div>
  )
}
