import { Autocomplete, Box, SxProps, TextField } from '@mui/material'
import { SyntheticEvent } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

export interface TagInputProps {
  control: Control<FieldValues>
}
export default function TagInput({ control }: TagInputProps) {
  return (
    <Controller
      control={control}
      name="TagInput"
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          freeSolo
          multiple
          options={[]}
          onChange={(e: SyntheticEvent<Element, Event>, v: string[] | null) => {
            onChange(v)
          }}
          renderInput={params => (
            <TextField label="TagInput" {...params} {...field} />
          )}
        />
      )}
    />
  )
}
