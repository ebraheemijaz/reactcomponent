import React, { useState } from 'react'
import TextArea from './TextArea'
import { Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'

function Form() {
    const initialState = {
        examination: '',
        clinicalhistory: '',
        findings: '',
        impressions: '',
        technique: '',
    }
    const { enqueueSnackbar } = useSnackbar()
    const [formData, setFormData] = useState(initialState)

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        enqueueSnackbar('Your report has been successfully submitted', {
            variant: 'success',
        })
        setFormData(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextArea
                    name={'examination'}
                    handleChange={handleChange}
                    value={formData.examination}
                    text={'Examination'}
                    autoFocus={true}
                />
                <TextArea
                    name={'clinicalhistory'}
                    handleChange={handleChange}
                    value={formData.clinicalhistory}
                    text={'Clinical History'}
                />
                <TextArea
                    name={'technique'}
                    handleChange={handleChange}
                    value={formData.technique}
                    text={'Technique'}
                />
                <TextArea
                    name={'findings'}
                    handleChange={handleChange}
                    value={formData.findings}
                    text={'Findings'}
                />
                <TextArea
                    name={'impressions'}
                    handleChange={handleChange}
                    value={formData.impressions}
                    text={'Impressions'}
                />
                <Button
                    style={{ margin: '2%', float: 'right', width: '40%' }}
                    type={'submit'}
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Form
