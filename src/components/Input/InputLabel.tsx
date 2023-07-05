import {Label} from './input.styles';

interface Props {
  label: string;
}

export function InputLabel({label}: Props) {
  return <Label>{label}</Label>;
}
