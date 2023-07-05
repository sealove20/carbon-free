import {AntDesign} from '@expo/vector-icons';
import {Icon} from './input.styles';

interface Props {
  size: number;
  name: keyof typeof AntDesign.glyphMap;
}

export function InputIcon({size, name}: Props) {
  return (
    <Icon>
      <AntDesign name={name} size={size} color="black" />
    </Icon>
  );
}
