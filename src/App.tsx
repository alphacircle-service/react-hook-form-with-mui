import { Box, Button, SxProps } from '@mui/material'
import FormInput from 'components/FormInput'
import TagInputController from 'components/TagInputController'
import TagInputUseController from 'components/TagInputUseController'
import { FormValues } from 'models'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const defaultValues: FormValues = {
  FormInput: 'FormInput Default Value',
  TagInputController: ['A', 'B'],
  TagInputUseController: ['C', 'D'],
}

export default function App() {
  const { control, handleSubmit } = useForm<FormValues>({
    reValidateMode: 'onBlur',
    defaultValues,
  })

  const handleOnSubmit: SubmitHandler<FormValues> = evt => {
    console.log(evt)
  }

  return (
    <Box
      sx={AppLayout}
      component="form"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box sx={AppContainer}>
        <TagInputController control={control} />
        <FormInput control={control} />
        <TagInputUseController name="TagInputUseController" control={control} />
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
  height: '250px',
  justifyContent: 'space-between',
}
