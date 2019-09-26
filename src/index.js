import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'emotion'

import App from './App'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #24292e;
    height: 100vh;

    #root {
      min-height: 100%;

      & > div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 25%;
      }
    }
  }
`

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
