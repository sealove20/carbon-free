import {Text, TouchableOpacity} from './button.styles';

interface IButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({title, onPress, disabled}: IButton) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
