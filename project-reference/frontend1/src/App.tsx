import * as React from 'react'
import { greet } from 'module1/util'

export const App: React.FC = () => {

  return (
    <div>Project Reference Sample { `${greet("User")} ` } </div>
  )
}