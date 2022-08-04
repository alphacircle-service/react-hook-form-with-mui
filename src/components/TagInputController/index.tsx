import { Autocomplete, TextField } from '@mui/material'
import { UnControlledComponentProps } from 'models'
import { SyntheticEvent } from 'react'
import { Controller } from 'react-hook-form'

const name = 'TagInputController'
export type TagInputProps = UnControlledComponentProps

export default function TagInputController({ control }: TagInputProps) {
  const handleChange =
    (onChange: (...event: any[]) => void) =>
    (_: SyntheticEvent<Element, Event>, v: string[] | null) => {
      onChange(v)
    }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          freeSolo
          multiple
          options={[]}
          onChange={handleChange(onChange)}
          renderInput={params => (
            <TextField label={name} {...params} {...field} />
          )}
        />
      )}
    />
  )
}
