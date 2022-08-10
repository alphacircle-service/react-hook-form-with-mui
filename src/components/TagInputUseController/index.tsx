import { Autocomplete, TextField } from '@mui/material'
import { FormType } from 'App'
import { SyntheticEvent } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

export type TagInputUseControllerProps = UseControllerProps<FormType>
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
      value={restFields.value as any[]}
      renderInput={parmas => (
        <TextField label={field.name} {...parmas} {...restFields} />
      )}
    />
  )
}
