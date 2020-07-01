import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core'
import CheckCircle from '@material-ui/icons/CheckCircle'
import PanoramaFishEye from '@material-ui/icons/PanoramaFishEye'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: '1%',
        display: 'flex',
    },
    leftSide: {
        marginTop: '1%',
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSide: {
        width: '90%',
        padding: '2% 0 2% 0',
    },
    textarea: {
        background: '#080f13',
    },
    circle: {
        color: theme.palette.primary.main,
    },
    line: {
        height: '100%',
        borderLeft: '2px solid grey',
    },
    filledline: {
        height: '100%',
        borderLeft: '2px solid #318bfe',
    },
    focused: {
        color: 'white',
    },
    multilineColor: {
        color: 'white',
    },
}))

function TextArea(props) {
    const [isFocussed, setIsFocussed] = useState(false)
    const hangleFocus = () => {
        setIsFocussed(true)
    }
    const hangleBlur = () => {
        setIsFocussed(false)
    }
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <div className={classes.leftSide}>
                {props.value.length > 0 ? (
                    <>
                        <CheckCircle className={classes.circle} />
                        <div className={classes.filledline}></div>
                    </>
                ) : (
                    <>
                        <PanoramaFishEye />
                        <div className={classes.line}></div>
                    </>
                )}
            </div>
            <div className={classes.rightSide}>
                <Typography className={isFocussed ? classes.focused : ''}>
                    {props.text}
                </Typography>
                <TextField
                    autoFocus={props.autoFocus}
                    onFocus={hangleFocus}
                    onBlur={hangleBlur}
                    name={props.name}
                    onChange={props.handleChange}
                    value={props.value}
                    variant={'outlined'}
                    fullWidth={true}
                    multiline={true}
                    className={classes.textarea}
                    InputProps={{
                        className: classes.multilineColor,
                    }}
                />
            </div>
        </div>
    )
}

export default TextArea
