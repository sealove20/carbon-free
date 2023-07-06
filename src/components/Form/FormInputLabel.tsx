import {Label} from './form.styles';

interface Props {
  label: string;
}

export function FormInputLabel({label}: Props) {
  return <Label>{label}</Label>;
}
