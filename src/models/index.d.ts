import { Control, Path } from 'react-hook-form'

export interface FormComponentProps<T> {
  control: Control<T>
  name: Path<T>
}
