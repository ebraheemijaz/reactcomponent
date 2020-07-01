import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { createMuiTheme } from '@material-ui/core/styles'

import { SnackbarProvider } from 'notistack'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#318bfe',
        },
        background: {
            paper: '#00070b',
            default: '#00070b',
        },
        text: {
            primary: '#686262',
        },
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
