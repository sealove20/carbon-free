import {Feather} from '@expo/vector-icons';
import Text from '@components/Text/Text';
import {
  ButtonsContainer,
  Percentage,
  PortifolioValue,
  RetireCredits,
  SellButton,
  YourPortifolioContainer,
  YourPortifolioContent,
  YourPortifolioLastPurchased,
  fundYear,
  lastPurchasedTextStyle,
  portifolioPercentage,
  portifolioValue,
  previousRetiredText,
  retireCreditsTextStyle,
  sellButtonTextStyle,
} from './yourPortifolio.styles';
import {light} from '@themes/light';

export function YourPortifolio() {
  return (
    <YourPortifolioContainer>
      <Feather name="pie-chart" size={24} color="black" />
      <Text>Your Portifolio</Text>
      <YourPortifolioContent>
        <PortifolioValue>
          <Text customStyle={portifolioValue}>18 credits</Text>
          <Percentage>
            <Feather
              name="arrow-up-right"
              size={24}
              color={light.colors.green}
            />
            <Text customStyle={portifolioPercentage}>8.41%</Text>
          </Percentage>
        </PortifolioValue>
        <YourPortifolioLastPurchased>
          <Text customStyle={fundYear}>$328.14</Text>
          <Text customStyle={lastPurchasedTextStyle}>
            Last purchase 28d ago
          </Text>
        </YourPortifolioLastPurchased>
      </YourPortifolioContent>
      <ButtonsContainer>
        <SellButton>
          <Text customStyle={sellButtonTextStyle}>Sell</Text>
        </SellButton>
        <RetireCredits>
          <Text customStyle={retireCreditsTextStyle}>Retire credits</Text>
        </RetireCredits>
      </ButtonsContainer>
      <Text customStyle={previousRetiredText}>
        You've previously retired 28 credits of this asset
      </Text>
    </YourPortifolioContainer>
  );
}
