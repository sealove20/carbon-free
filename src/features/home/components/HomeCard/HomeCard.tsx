import {ReactNode} from 'react';
import {type RuleSet} from 'styled-components/native/dist/types';

import Text from '@components/Text/Text';
import {Feather} from '@expo/vector-icons';
import {
  CardContent,
  CardPercentage,
  CardPercentageContainer,
  cardTitle,
  cardValue,
  HomeCardContainer,
} from './homeCard.styles';
import {Card} from '@components/Card/Card';
import {light} from '@themes/light';

interface Props {
  children?: ReactNode;
  positive?: boolean;
  iconName: keyof typeof Feather.glyphMap;
  colorName: string;
  value: string;
  percentage: string;
  title: string;
  customStyle?: RuleSet;
  onPress?: () => void;
}

export function HomeCard({
  children,
  positive = false,
  iconName,
  colorName,
  percentage,
  title,
  value,
  customStyle,
  onPress,
}: Props) {
  return (
    <Card customStyle={customStyle} onPress={onPress}>
      <HomeCardContainer>
        <Feather name={iconName} size={24} color={colorName} />
        <Text customStyle={cardTitle}>{title}</Text>
        {children}
        <CardContent>
          <Text customStyle={cardValue}>${value}</Text>
          <CardPercentageContainer>
            <Feather
              name={positive ? 'arrow-up-right' : 'arrow-down-right'}
              size={18}
              color={positive ? light.colors.green : light.colors.red}
            />
            <CardPercentage positive={positive}>{percentage}%</CardPercentage>
          </CardPercentageContainer>
        </CardContent>
      </HomeCardContainer>
    </Card>
  );
}
