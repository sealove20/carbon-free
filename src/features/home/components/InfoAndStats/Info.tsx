import Text from '@components/Text/Text';
import {
  ContentContainer,
  InfoContainer,
  infoContent,
  infoTitle,
} from './infoAndStats.styles';
import {Feather} from '@expo/vector-icons';

interface Props {
  title: string;
  content: string;
}

export function Info({title, content}: Props) {
  return (
    <InfoContainer>
      <ContentContainer>
        <Text customStyle={infoTitle}>{title}</Text>
        <Feather name="info" size={14} color="gray" />
      </ContentContainer>
      <Text customStyle={infoContent}>{content}</Text>
    </InfoContainer>
  );
}
