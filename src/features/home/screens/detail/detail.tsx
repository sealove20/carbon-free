import {StyledSafeAreaView} from '@features/auth/screens/login/login.styles';

import {
  BackButton,
  BuyButtonContainer,
  Content,
  HeaderContainer,
  HeaderTitleContainer,
  Percentage,
  PortifolioValue,
  PortifolioValueContainer,
  fundAbreviation,
  fundTitle,
  fundYear,
  portifolioPercentage,
  portifolioValue,
} from './detail.styles';
import {Header} from '@components/Header/Header';
import Text from '@components/Text/Text';
import {Feather} from '@expo/vector-icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FundDetailStackParamList} from '@navigation/homeStack';
import {Button} from '@components/Button/Button';
import {Chart} from '@features/home/components/Chart/Chart';
import {InfoAndStatsContainer} from '@features/home/components/InfoAndStats/infoAndStats.styles';
import {FundBreakdown} from '@features/home/components/FundBreakdown/FundBreakdown';
import {YourPortifolio} from '@features/home/components/YourPortifolio/YourPortifolio';
import {light} from '@themes/light';
import {TipNotes} from '@features/home/components/TipNotes/TipNotes';
import {InfoAndStats} from '@features/home/components/InfoAndStats/InfoAndStats';

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
              <Feather
                name="arrow-up-right"
                size={24}
                color={light.colors.green}
              />
              <Text customStyle={portifolioPercentage}>31.82%</Text>
            </Percentage>
          </PortifolioValue>
          <Text customStyle={fundYear}>2022</Text>
        </PortifolioValueContainer>
        <Chart />
        <InfoAndStats />
        <FundBreakdown />
        <YourPortifolio />
        <TipNotes />
        <BuyButtonContainer>
          <Button onPress={() => {}} title="Buy" />
        </BuyButtonContainer>
      </Content>
    </StyledSafeAreaView>
  );
}
