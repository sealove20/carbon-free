import {useAssets} from 'expo-asset';
import Text from '@components/Text/Text';
import {
  FundBreakdownContainer,
  CardContentContainer,
  CardImage,
  FundBreakdownContent,
  HighlightedCards,
  LogoImage,
  cardStyle,
  cardText,
  fundBreakdownText,
  fundBreakdownTitle,
  highlighted,
  highlightedCardSpacing,
  readMore,
} from './fundBreakdown.styles';
import {Card} from '@components/Card/Card';

export function FundBreakdown() {
  const [assets, error] = useAssets([
    require('../../../../../assets/aspira.png'),
    require('../../../../../assets/climeworks.png'),
    require('../../../../../assets/sustaera.png'),
    require('../../../../../assets/KrOneThailand.png'),
    require('../../../../../assets/landscape.png'),
    require('../../../../../assets/plant.png'),
    require('../../../../../assets/ceramic.png'),
    require('../../../../../assets/windTurbine.png'),
  ]);
  return (
    <FundBreakdownContainer>
      <Text customStyle={fundBreakdownTitle}>Fund Breakdown</Text>
      <FundBreakdownContent>
        <Text customStyle={highlighted}>Highlighted</Text>
        <Text customStyle={fundBreakdownText}>Value</Text>
        <Text customStyle={fundBreakdownText}>Vintage</Text>
        <Text customStyle={fundBreakdownText}>Registry</Text>
      </FundBreakdownContent>
      <HighlightedCards>
        <Card customStyle={cardStyle}>
          {assets ? (
            <CardImage
              source={assets[4]}
              contentFit="cover"
              transition={1000}
            />
          ) : null}
          <CardContentContainer>
            {assets ? (
              <LogoImage
                source={assets[0]}
                contentFit="cover"
                transition={1000}
              />
            ) : null}
            <Text customStyle={cardText}>
              Aspira is building a modular, direct air capture system with the
              energy supply integrated into the modules.
            </Text>
            <Text customStyle={readMore}>Read more</Text>
          </CardContentContainer>
        </Card>
        <Card customStyle={[cardStyle, highlightedCardSpacing]}>
          {assets ? (
            <CardImage
              source={assets[5]}
              contentFit="cover"
              transition={1000}
            />
          ) : null}
          <CardContentContainer>
            {assets ? (
              <LogoImage
                source={assets[1]}
                contentFit="cover"
                transition={1000}
              />
            ) : null}
            <Text customStyle={cardText}>
              uses renewable geothermal energy and waste heat to capture CO₂
              directly from the air.
            </Text>
            <Text customStyle={readMore}>Read more</Text>
          </CardContentContainer>
        </Card>
        <Card customStyle={[cardStyle, highlightedCardSpacing]}>
          {assets ? (
            <CardImage
              source={assets[6]}
              contentFit="cover"
              transition={1000}
            />
          ) : null}
          <CardContentContainer>
            {assets ? (
              <LogoImage
                source={assets[2]}
                contentFit="cover"
                transition={1000}
              />
            ) : null}
            <Text customStyle={cardText}>
              Sustaera uses ceramic monolith air contactors to capture CO₂
              directly from the air for permanent storage.
            </Text>
            <Text customStyle={readMore}>Read more</Text>
          </CardContentContainer>
        </Card>
        <Card customStyle={[cardStyle, highlightedCardSpacing]}>
          {assets ? (
            <CardImage
              source={assets[7]}
              contentFit="cover"
              transition={1000}
            />
          ) : null}
          <CardContentContainer>
            {assets ? (
              <LogoImage
                source={assets[3]}
                contentFit="cover"
                transition={1000}
              />
            ) : null}
            <Text customStyle={cardText}>
              The project consists of 30 Wind Turbine Generators (WTGs) of 3.0
              MW capacities each.
            </Text>
            <Text customStyle={readMore}>Read more</Text>
          </CardContentContainer>
        </Card>
      </HighlightedCards>
    </FundBreakdownContainer>
  );
}
