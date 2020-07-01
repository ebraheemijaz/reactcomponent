import React from 'react'
import './App.css'
import Form from './components/Form'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
})

function App() {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Form />
                </CardContent>
            </Card>
        </div>
    )
}

export default App
