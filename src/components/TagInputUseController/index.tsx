import { Autocomplete, TextField } from '@mui/material'
import { FormValues } from 'models'
import { SyntheticEvent } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export type TagInputUseControllerProps = UseControllerProps<FormValues>
export default function TagInputUseController(
  tagInputuseControllerProps: TagInputUseControllerProps,
) {
  const { field } = useController(tagInputuseControllerProps)
  const { onChange, ...restFields } = field

  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    v: string[] | null,
  ) => {
    onChange(v)
  }

  return (
    <Autocomplete
      freeSolo
      multiple
      options={[]}
      onChange={handleChange}
      value={restFields.value || []}
      renderInput={parmas => (
        <TextField label={field.name} {...parmas} {...restFields} />
      )}
    />
  )
}
