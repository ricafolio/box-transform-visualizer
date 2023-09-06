import { useState } from 'react'
import InputRange from './components/InputRange'
import ResetButton from './components/ResetButton'
import ResultCodeSection from './components/ResultCodeSection'
import ResultPreviewSection from './components/ResultPreviewSection'
import { TransformValues, InputRangeType, GeneratedStyleType } from './types'

export default function App() {
  const defaultTransformValues: TransformValues = {
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0
  }
  const [transformValue, setTransformValue] = useState<TransformValues>(defaultTransformValues)

  const inputRanges: InputRangeType[] = [
    {
      id: "rotate",
      label: "Rotate",
      defaultValue: 0,
      currentValue: transformValue["rotate"],
      min: 0,
      max: 360,
      step: 1,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          rotate: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          rotate: newDefaultValue
        })
      }
    },
    {
      id: "scaleX",
      label: "Scale X",
      defaultValue: 1,
      currentValue: transformValue["scaleX"],
      min: 0.25,
      max: 3,
      step: 0.05,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          scaleX: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          scaleX: newDefaultValue
        })
      }
    },
    {
      id: "scaleY",
      label: "Scale Y",
      defaultValue: 1,
      currentValue: transformValue["scaleY"],
      min: 0.25,
      max: 3,
      step: 0.05,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          scaleY: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          scaleY: newDefaultValue
        })
      }
    },
    {
      id: "skewX",
      label: "Skew X",
      defaultValue: 0,
      currentValue: transformValue["skewX"],
      min: -89,
      max: 89,
      step: 1,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          skewX: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          skewX: newDefaultValue
        })
      }
    },
    {
      id: "skewY",
      label: "Skew Y",
      defaultValue: 0,
      currentValue: transformValue["skewY"],
      min: -89,
      max: 89,
      step: 1,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          skewY: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          skewY: newDefaultValue
        })
      }
    },
    {
      id: "translateX",
      label: "Translate X",
      defaultValue: 0,
      currentValue: transformValue["translateX"],
      min: -89,
      max: 89,
      step: 1,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          translateX: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          translateX: newDefaultValue
        })
      }
    },
    {
      id: "translateY",
      label: "Translate Y",
      defaultValue: 0,
      currentValue: transformValue["translateY"],
      min: -89,
      max: 89,
      step: 1,
      handleValueChange: (newValue) => {
        setTransformValue({
          ...transformValue,
          translateY: newValue
        })
      },
      handleResetField: (newDefaultValue) => {
        setTransformValue({
          ...transformValue,
          translateY: newDefaultValue
        })
      }
    },
  ]

  const generatedStyle: GeneratedStyleType = {
    transform: `rotate(${transformValue.rotate}deg) ${transformValue.translateX !== 0 || transformValue.translateY !== 0 ? `translate(${transformValue.translateX}px, ${transformValue.translateY}px)` : ''} ${transformValue.scaleX !== 1 || transformValue.scaleY !== 1 ? `scale(${transformValue.scaleX}, ${transformValue.scaleY})` : ''} ${transformValue.skewX !== 0 || transformValue.skewY!== 0 ? `skew(${transformValue.skewX}deg, ${transformValue.skewY}deg)` : ''}`
  }

  return (
    <main>
      <ResultPreviewSection style={generatedStyle} />

      <div className="settings-container">
        <h1>Box Transform Settings</h1>

        {inputRanges.map((field, i) => {
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
              handleValueChange={field.handleValueChange}
              handleResetField={field.handleResetField}
            />
          )
        })}

        <ResetButton handleResetClick={() => setTransformValue(defaultTransformValues)} />

        <ResultCodeSection code={generatedStyle.transform} />
      </div>
    </main>
  )
}
