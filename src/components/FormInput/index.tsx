import { TextField } from '@mui/material'
import { FormComponentProps } from 'models'
import { Controller } from 'react-hook-form'

export default function FormInput<T>({ control, name }: FormComponentProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField {...field} value={field.value || ''} label={name} />
      )}
    />
  )
}
