import { Box, Button, SxProps } from '@mui/material'
import FormInput from 'components/FormInput'
import TagInputController from 'components/TagInputController'
import TagInputUseController, {
  TagInputUseControllerProps,
} from 'components/TagInputUseController'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

export default function App() {
  const { control, handleSubmit } = useForm({ reValidateMode: 'onBlur' })

  const handleOnSubmit: SubmitHandler<FieldValues> = evt => {
    console.log(evt)
  }

  const tagInputUseController: TagInputUseControllerProps = {
    name: 'TagInputUseController',
    control,
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
        <TagInputUseController {...tagInputUseController} />
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
