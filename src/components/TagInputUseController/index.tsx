import { Autocomplete, TextField } from '@mui/material'
import { SyntheticEvent } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export type TagInputUseControllerProps = UseControllerProps
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
      renderInput={parmas => (
        <TextField label={field.name} {...parmas} {...restFields} />
      )}
    />
  )
}
