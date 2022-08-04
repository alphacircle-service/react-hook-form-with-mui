import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootDom = document.getElementById('root')
if (!rootDom) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootDom)

export const darktheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

root.render(
  <ThemeProvider theme={darktheme}>
    <App />
  </ThemeProvider>,
)
