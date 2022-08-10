/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField } from '@mui/material'
import { FormComponentProps } from 'models'
import { SyntheticEvent } from 'react'
import { Controller } from 'react-hook-form'

export type TagInputProps<T> = FormComponentProps<T>

export default function TagInputController<T>({
  control,
  name,
}: TagInputProps<T>) {
  const handleChange =
    (onChange: (event: any[] | null) => void) =>
    (_: SyntheticEvent<Element, Event>, v: string[] | null) => {
      onChange(v)
    }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ...field } }) => (
        <Autocomplete
          freeSolo
          multiple
          options={[]}
          value={field.value as any[]}
          onChange={handleChange(onChange)}
          renderInput={params => (
            <TextField label={name} {...params} {...field} />
          )}
        />
      )}
    />
  )
}
