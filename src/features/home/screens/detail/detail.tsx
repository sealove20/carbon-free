import {StyledSafeAreaView} from '@features/auth/screens/login/login.styles';
import {Image} from 'expo-image';

import {
  BackButton,
  ButtonsContainer,
  BuyButtonContainer,
  Content,
  HeaderContainer,
  HeaderTitleContainer,
  Percentage,
  PortifolioValue,
  PortifolioValueContainer,
  RetireCredits,
  SellButton,
  TipNotes,
  YourPortifolio,
  YourPortifolioContent,
  YourPortifolioLastPurchased,
  fundAbreviation,
  fundTitle,
  fundYear,
  lastPurchasedTextStyle,
  portifolioPercentage,
  portifolioValue,
  previousRetiredText,
  retireCreditsTextStyle,
  sellButtonTextStyle,
  tipNotesText,
  tipNotesTextInformation,
} from './detail.styles';
import {Header} from '@components/Header/Header';
import Text from '@components/Text/Text';
import {Feather} from '@expo/vector-icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FundDetailStackParamList} from '@navigation/home-stack';
import {Card} from '@components/Card/Card';
import {Button} from '@components/Button/Button';
import {Chart} from '@features/home/components/Chart/Chart';
import {InfoAndStatsContainer} from '@features/home/components/InfoAndStats/infoAndStats.styles';
import {FundBreakdown} from '@features/home/components/FundBreakdown/FundBreakdown';

interface Props {
  navigation: NativeStackNavigationProp<FundDetailStackParamList, 'Detail'>;
}

export function Detail({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Header>
        <HeaderContainer>
          <BackButton onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </BackButton>
          <HeaderTitleContainer>
            <Text customStyle={fundTitle}>Wind Fund</Text>
            <Text customStyle={fundAbreviation}>WFND</Text>
          </HeaderTitleContainer>
        </HeaderContainer>
      </Header>
      <Content>
        <PortifolioValueContainer>
          <PortifolioValue>
            <Text customStyle={portifolioValue}>$1,245.23</Text>
            <Percentage>
              <Feather name="arrow-up-right" size={24} color="green" />
              <Text customStyle={portifolioPercentage}>31.82%</Text>
            </Percentage>
          </PortifolioValue>
          <Text customStyle={fundYear}>2022</Text>
        </PortifolioValueContainer>
        <Chart />
        <InfoAndStatsContainer />
        <FundBreakdown />

        <YourPortifolio>
          <Feather name="pie-chart" size={24} color="black" />
          <Text>Your Portifolio</Text>
          <YourPortifolioContent>
            <PortifolioValue>
              <Text customStyle={portifolioValue}>18 credits</Text>
              <Percentage>
                <Feather name="arrow-up-right" size={24} color="green" />
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
        </YourPortifolio>
        <TipNotes>
          <Text customStyle={tipNotesText}>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order.
          </Text>
          <Text customStyle={tipNotesTextInformation}>
            The information provided is not investment advice, and should not be
            used as a recommendation to buy or sell assets.
          </Text>
        </TipNotes>
        <BuyButtonContainer>
          <Button onPress={() => {}} title="Buy" />
        </BuyButtonContainer>
      </Content>
    </StyledSafeAreaView>
  );
}
