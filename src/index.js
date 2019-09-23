import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion'

import App from './App'

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
