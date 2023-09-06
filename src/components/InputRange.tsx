import NoStyleIcon from './icon/NoStyleIcon'
import { InputRangeProps } from '../types'

export default function InputRange(props: InputRangeProps) {
  const {
    id,
    label,
    min,
    max,
    step,
    defaultValue,
    currentValue,
    handleValueChange,
    handleResetField
  } = props

  return (
    <div className="field-container">
      <label htmlFor={id}>{label}</label>

      <div className="input-box-container">
        <div className="input-box-left">
          <input 
            type="range" 
            id={id} 
            name={id} 
            min={min} 
            max={max} 
            step={step} 
            value={currentValue} 
            onChange={(e) => handleValueChange(parseFloat(e.target.value))}
          />
        </div>

        <div className="input-box-right">{currentValue}</div>

        <button 
          className="btn-reset" 
          aria-label={`Reset ${label}`} 
          onClick={() => handleResetField(defaultValue)}
        >
          <NoStyleIcon />
        </button>
      </div>
    </div>
  )
}
