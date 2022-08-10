import { FieldValues } from 'react-hook-form'

export interface UnControlledComponentProps {
  control: Control<FormValues>
}

export interface FormValues extends FieldValues {
  FormInput: string
  TagInputController: string[]
  TagInputUseController: string[]
}
