import {Asset} from 'expo-asset';
import {type RuleSet} from 'styled-components/native/dist/types';
import {Card} from '@components/Card/Card';
import {
  CardContentContainer,
  CardImage,
  LogoImage,
  cardStyle,
  cardText,
  readMore,
} from './fundBreakdown.styles';
import Text from '@components/Text/Text';

interface Props {
  cardImage: Asset;
  cardLogo: Asset;
  carcContent: string;
  customStyle?: RuleSet;
}

export function HighlightedCard({
  carcContent,
  cardImage,
  cardLogo,
  customStyle,
}: Props) {
  return (
    <Card customStyle={[cardStyle, customStyle]}>
      <CardImage source={cardImage} contentFit="cover" transition={1000} />
      <CardContentContainer>
        <LogoImage source={cardLogo} contentFit="cover" transition={1000} />
        <Text customStyle={cardText}>{carcContent}</Text>
        <Text customStyle={readMore}>Read more</Text>
      </CardContentContainer>
    </Card>
  );
}
