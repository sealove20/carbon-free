import {Text, TouchableOpacity} from './button.styles';
import {type RuleSet} from 'styled-components/native/dist/types';

interface IButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  customStyle?: RuleSet;
}

export function Button({title, onPress, disabled, customStyle}: IButton) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      customStyle={customStyle}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
