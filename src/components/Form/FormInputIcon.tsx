import {Entypo} from '@expo/vector-icons';
import {Icon} from './form.styles';

interface Props {
  secureText: boolean;
  onPress: (boolean) => void;
}

export function FormInputIcon({secureText = false, onPress}: Props) {
  const iconType = secureText ? 'eye-with-line' : 'eye';
  return (
    <Icon>
      <Entypo
        name={iconType}
        size={24}
        color="black"
        onPress={() => onPress(!secureText)}
      />
    </Icon>
  );
}
