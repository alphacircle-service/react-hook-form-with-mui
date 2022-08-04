import { TextField } from '@mui/material'
import { Control, Controller, FieldValues } from 'react-hook-form'

export interface FormInputProps {
  control: Control<FieldValues>
}
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
