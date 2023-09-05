import { useState } from 'react'
import InputRange from './components/InputRange'
import ResetButton from './components/ResetButton'
import ResultCodeSection from './components/ResultCodeSection'
import ResultPreviewSection from './components/ResultPreviewSection'

export default function App() {
  const [rotateValue, setRotateValue] = useState(0)
  const [scaleXValue, setScaleXValue] = useState(1)
  const [scaleYValue, setScaleYValue] = useState(1)
  const [skewXValue, setSkewXValue] = useState(0)
  const [skewYValue, setSkewYValue] = useState(0)
  const [translateXValue, setTranslateXValue] = useState(0)
  const [translateYValue, setTranslateYValue] = useState(0)
  const ranges = [
    {
      id: "rotate",
      label: "Rotate",
      defaultValue: 0,
      currentValue: rotateValue,
      min: 0,
      max: 360,
      step: 1,
      onValueChange: (newValue: number) => {
        setRotateValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setRotateValue(newDefaultValue)
      }
    },
    {
      id: "scaleX",
      label: "Scale X",
      defaultValue: 1,
      currentValue: scaleXValue,
      min: 0.25,
      max: 3,
      step: 0.05,
      onValueChange: (newValue: number) => {
        setScaleXValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setScaleXValue(newDefaultValue)
      }
    },
    {
      id: "scaleY",
      label: "Scale Y",
      defaultValue: 1,
      currentValue: scaleYValue,
      min: 0.25,
      max: 3,
      step: 0.05,
      onValueChange: (newValue: number) => {
        setScaleYValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setScaleYValue(newDefaultValue)
      }
    },
    {
      id: "skewX",
      label: "Skew X",
      defaultValue: 0,
      currentValue: skewXValue,
      min: -89,
      max: 89,
      step: 1,
      onValueChange: (newValue: number) => {
        setSkewXValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setSkewXValue(newDefaultValue)
      }
    },
    {
      id: "skewY",
      label: "Skew Y",
      defaultValue: 0,
      currentValue: skewYValue,
      min: -89,
      max: 89,
      step: 1,
      onValueChange: (newValue: number) => {
        setSkewYValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setSkewYValue(newDefaultValue)
      }
    },
    {
      id: "translateX",
      label: "Translate X",
      defaultValue: 0,
      currentValue: translateXValue,
      min: -89,
      max: 89,
      step: 1,
      onValueChange: (newValue: number) => {
        setTranslateXValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setTranslateXValue(newDefaultValue)
      }
    },
    {
      id: "translateY",
      label: "Translate Y",
      defaultValue: 0,
      currentValue: translateYValue,
      min: -89,
      max: 89,
      step: 1,
      onValueChange: (newValue: number) => {
        setTranslateYValue(newValue)
      },
      handleResetField: (newDefaultValue: number) => {
        setTranslateYValue(newDefaultValue)
      }
    },
  ]
  const boxStyle = {
    transform: `rotate(${rotateValue}deg) ${translateXValue !== 0 || translateYValue !== 0 ? `translate(${translateXValue}px, ${translateYValue}px)` : ''} ${scaleXValue !== 1 || scaleYValue !== 1 ? `scale(${scaleXValue}, ${scaleYValue})` : ''} ${skewXValue !== 0 || skewYValue !== 0 ? `skew(${skewXValue}deg, ${skewYValue}deg)` : ''}`
  }

  function handleResetClick() {
    setRotateValue(0)
    setScaleXValue(1)
    setScaleYValue(1)
    setSkewXValue(0)
    setSkewYValue(0)
    setTranslateXValue(0)
    setTranslateYValue(0)
  }

  return (
    <main>
      <ResultPreviewSection style={boxStyle} />

      <div className="settings-container">
        <h1>Box Transform Settings</h1>

        {ranges.map((field, i) => {
          return (
            <InputRange
              key={`range-${i}`}
              id={field.id}
              label={field.label}
              defaultValue={field.defaultValue}
              min={field.min}
              max={field.max}
              step={field.step}
              currentValue={field.currentValue}
              handleValueChange={field.onValueChange}
              handleResetField={field.handleResetField}
            />
          )
        })}

        <ResetButton handleResetClick={handleResetClick} />

        <ResultCodeSection code={boxStyle.transform} />
      </div>
    </main>
  )
}
