import { Box, Button, SxProps } from '@mui/material'
import FormInput from 'components/FormInput'
import TagInput from 'components/TagInput'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export default function App() {
  const { control, handleSubmit } = useForm({ reValidateMode: 'onBlur' })

  const handleOnSubmit: SubmitHandler<FieldValues> = evt => {
    console.log(evt)
  }

  return (
    <Box
      sx={AppLayout}
      component="form"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box sx={AppContainer}>
        <TagInput control={control} />
        <FormInput control={control} />
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

const AppLayout: SxProps = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  background: '#323232',
}

const AppContainer: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  height: '175px',
  justifyContent: 'space-between',
}
