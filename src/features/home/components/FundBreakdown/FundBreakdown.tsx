import {useAssets} from 'expo-asset';
import Text from '@components/Text/Text';
import {
  FundBreakdownContainer,
  FundBreakdownContent,
  HighlightedCards,
  fundBreakdownText,
  fundBreakdownTitle,
  highlighted,
  highlightedCardSpacing,
} from './fundBreakdown.styles';
import {HighlightedCard} from './HighlightedCard';

export function FundBreakdown() {
  const [assets] = useAssets([
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
      {assets ? (
        <HighlightedCards>
          <HighlightedCard
            carcContent="Aspira is building a modular, direct air capture system with the
              energy supply integrated into the modules."
            cardImage={assets[4]}
            cardLogo={assets[0]}
          />
          <HighlightedCard
            carcContent="uses renewable geothermal energy and waste heat to capture CO₂
            directly from the air."
            cardImage={assets[5]}
            cardLogo={assets[1]}
            customStyle={highlightedCardSpacing}
          />
          <HighlightedCard
            carcContent="Sustaera uses ceramic monolith air contactors to capture CO₂
            directly from the air for permanent storage."
            cardImage={assets[6]}
            cardLogo={assets[2]}
            customStyle={highlightedCardSpacing}
          />
          <HighlightedCard
            carcContent="The project consists of 30 Wind Turbine Generators (WTGs) of 3.0
            MW capacities each."
            cardImage={assets[7]}
            cardLogo={assets[3]}
            customStyle={highlightedCardSpacing}
          />
        </HighlightedCards>
      ) : null}
    </FundBreakdownContainer>
  );
}
