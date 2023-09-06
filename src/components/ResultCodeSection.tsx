import { ResultProps } from '../types'

export default function ResultCodeSection({ code }: ResultProps) {
  return (
    <div>
      <h2>Code result</h2>
      <code>
        transform: {JSON.stringify(code).replace(/['"]+/g, '')}
      </code>
    </div>
  )
}
