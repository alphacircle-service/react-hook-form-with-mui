import { Autocomplete, TextField } from '@mui/material'
import { UnControlledComponentProps } from 'models'
import { SyntheticEvent } from 'react'
import { Controller } from 'react-hook-form'

export type TagInputProps = UnControlledComponentProps
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
          onChange={(_: SyntheticEvent<Element, Event>, v: string[] | null) => {
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
