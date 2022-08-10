import { Box, Button, SxProps } from '@mui/material'
import FormInput from 'components/FormInput'
import TagInputController from 'components/TagInputController'
import TagInputUseController from 'components/TagInputUseController'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const defaultValues = {
  FormInput: 'FormInput Default Value',
  TagInputController: ['A', 'B'],
  TagInputUseController: ['C', 'D'],
}

export type FormType = typeof defaultValues

export default function App() {
  const { control, handleSubmit } = useForm<FormType>({
    reValidateMode: 'onBlur',
    defaultValues,
  })

  const handleOnSubmit: SubmitHandler<FormType> = evt => {
    console.log(evt)
  }

  return (
    <Box
      sx={AppLayout}
      component="form"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box sx={AppContainer}>
        <TagInputController control={control} name="TagInputController" />
        <FormInput control={control} name="FormInput" />
        <TagInputUseController control={control} name="TagInputUseController" />
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
