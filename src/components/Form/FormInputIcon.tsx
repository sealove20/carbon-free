import {AntDesign} from '@expo/vector-icons';
import {Icon} from './form.styles';

interface Props {
  size: number;
  name: keyof typeof AntDesign.glyphMap;
}

export function FormInputIcon({size, name}: Props) {
  return (
    <Icon>
      <AntDesign name={name} size={size} color="black" />
    </Icon>
  );
}
