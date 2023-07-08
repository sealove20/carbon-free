import {Header} from '@components/Header/Header';
import Text from '@components/Text/Text';
import {StyledSafeAreaView} from '@features/auth/screens/login/login.styles';
import {AntDesign} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {
  Account,
  CarbonCreditTip,
  CarbonCreditTipContent,
  ChartsContainer,
  Content,
  HeaderContainer,
  InvestCardContainer,
  Percentage,
  Portifolio,
  PortifolioValue,
  PortifolioValueContainer,
  accountTextStyle,
  carbonCreditTipContent,
  carbonCreditTipTitle,
  funds,
  homeCardStyle,
  investCardStyle,
  investCardTitle,
  portifolioPercentage,
  portifolioTitle,
  portifolioValue,
} from './home.styles';
import {EarRewards} from '@features/home/components/EarRewards/EarRewards';
import {HomeCard} from '@features/home/components/HomeCard/HomeCard';
import {InvestCard} from '@features/home/components/InvestCard/InvestCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FundDetailStackParamList} from '@navigation/home-stack';
import WindChart from '@features/home/assets/WindChart';
import SolarChart from '@features/home/assets/SolarChart';
import EnergyChart from '@features/home/assets/EnergyChart';
import BI from '@features/home/assets/BI';

interface Props {
  navigation: NativeStackNavigationProp<FundDetailStackParamList, 'Detail'>;
}

export function Home({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Header>
        <HeaderContainer>
          <Account>
            <AntDesign name="user" size={24} color="black" />
            <Text customStyle={accountTextStyle}>
              Account: $1,457.23
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Text>
            <AntDesign name="bells" size={24} color="black" />
          </Account>
          <Portifolio>
            <PortifolioValueContainer>
              <Text customStyle={portifolioTitle}>Portfolio</Text>
              <PortifolioValue>
                <Text customStyle={portifolioValue}>$1,245.23</Text>
                <Percentage>
                  <Feather name="arrow-up-right" size={24} color="green" />
                  <Text customStyle={portifolioPercentage}>31.82%</Text>
                </Percentage>
              </PortifolioValue>
            </PortifolioValueContainer>
            <EarRewards />
          </Portifolio>
        </HeaderContainer>
      </Header>
      <Content>
        <Text customStyle={funds}>Funds</Text>
        <ChartsContainer>
          <HomeCard
            positive
            iconName="wind"
            colorName="blue"
            value="1032.23"
            title="Wind Fund"
            percentage="3.51"
            onPress={() => navigation.navigate('Detail')}
          >
            <WindChart />
          </HomeCard>
          <HomeCard
            iconName="sun"
            colorName="orange"
            value="986.61"
            title="Solar Fund"
            percentage="0.13"
            customStyle={homeCardStyle}
          >
            <SolarChart />
          </HomeCard>
          <HomeCard
            positive
            iconName="battery-charging"
            colorName="green"
            value="1122.95"
            title="Energy Fund"
            percentage="4"
            customStyle={homeCardStyle}
          >
            <EnergyChart />
          </HomeCard>
        </ChartsContainer>
        <CarbonCreditTip>
          <CarbonCreditTipContent>
            <Text customStyle={carbonCreditTipTitle}>
              Learn more about carbon credits
            </Text>
            <Text customStyle={carbonCreditTipContent}>
              Check out our top tips!
            </Text>
          </CarbonCreditTipContent>
          <BI />
        </CarbonCreditTip>
        <InvestCardContainer>
          <InvestCard>
            <Text customStyle={investCardTitle}>
              Why should you invest here?
            </Text>
          </InvestCard>
          <InvestCard customStyle={investCardStyle} />
          <InvestCard customStyle={investCardStyle} />
        </InvestCardContainer>
      </Content>
    </StyledSafeAreaView>
  );
}
