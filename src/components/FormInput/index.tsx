import { TextField } from '@mui/material'
import { UnControlledComponentProps } from 'models'
import { Controller } from 'react-hook-form'

export type FormInputProps = UnControlledComponentProps
export default function FormInput({ control }: FormInputProps) {
  return (
    <Controller
      control={control}
      name="FormInput"
      render={({ field }) => (
        <TextField {...field} value={field.value || ''} label="FormInput" />
      )}
    />
  )
}
