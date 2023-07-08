import {StyledSafeAreaView} from '@features/auth/screens/login/login.styles';
import {Image} from 'expo-image';

import {
  ActiveItem,
  BackButton,
  ButtonsContainer,
  BuyButtonContainer,
  CardContentContainer,
  CardImage,
  ChartContainer,
  ChatFilter,
  ChatFilterItem,
  ChatFilterItemText,
  Content,
  ContentContainer,
  FundBreakdown,
  FundBreakdownContent,
  GroupContainer,
  GroupInfoContainer,
  HeaderContainer,
  HeaderTitleContainer,
  HighlightedCards,
  InfoAndStats,
  InfoContainer,
  LogoImage,
  Percentage,
  PortifolioValue,
  PortifolioValueContainer,
  RetireCredits,
  SellButton,
  TipNotes,
  YourPortifolio,
  YourPortifolioContent,
  YourPortifolioLastPurchased,
  activeItemStyle,
  cardStyle,
  cardText,
  fundAbreviation,
  fundBreakdownText,
  fundBreakdownTitle,
  fundTitle,
  fundYear,
  highlighted,
  highlightedCardSpacing,
  infoAndStatsTitle,
  infoContent,
  infoTitle,
  portifolioPercentage,
  portifolioTitle,
  portifolioValue,
  previousRetiredText,
  readMore,
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
import DetailChart from '@features/home/components/Chart/DetailChart';
import {Card} from '@components/Card/Card';
import {useAssets} from 'expo-asset';
import {Button} from '@components/Button/Button';

interface Props {
  navigation: NativeStackNavigationProp<FundDetailStackParamList, 'Detail'>;
}

export function Detail({navigation}: Props) {
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
        <ChartContainer>
          <DetailChart />
          <ChatFilter>
            <ChatFilterItem>
              <ChatFilterItemText>1h</ChatFilterItemText>
            </ChatFilterItem>
            <ActiveItem>
              <Text customStyle={activeItemStyle}>1d</Text>
            </ActiveItem>
            <ChatFilterItem>
              <ChatFilterItemText>1w</ChatFilterItemText>
            </ChatFilterItem>
            <ChatFilterItem>
              <ChatFilterItemText>1m</ChatFilterItemText>
            </ChatFilterItem>
            <ChatFilterItem>
              <ChatFilterItemText>1y</ChatFilterItemText>
            </ChatFilterItem>
            <ChatFilterItem>
              <ChatFilterItemText>all</ChatFilterItemText>
            </ChatFilterItem>
          </ChatFilter>
        </ChartContainer>
        <InfoAndStats>
          <Text customStyle={infoAndStatsTitle}>Info & Stats</Text>
          <GroupContainer>
            <GroupInfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>AUM</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>$430.88m</Text>
              </InfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>Vintage Range</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>2019 – 2022</Text>
              </InfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>Price at Close</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>$17.68</Text>
              </InfoContainer>
            </GroupInfoContainer>
            <GroupInfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>Issue Date</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>18/04/2022</Text>
              </InfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>TER</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>0.15%</Text>
              </InfoContainer>
              <InfoContainer>
                <ContentContainer>
                  <Text customStyle={infoTitle}>Price at Open</Text>
                  <Feather name="info" size={14} color="gray" />
                </ContentContainer>
                <Text customStyle={infoContent}>$17.74</Text>
              </InfoContainer>
            </GroupInfoContainer>
          </GroupContainer>
        </InfoAndStats>
        <FundBreakdown>
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
                  Aspira is building a modular, direct air capture system with
                  the energy supply integrated into the modules.
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
                  The project consists of 30 Wind Turbine Generators (WTGs) of
                  3.0 MW capacities each.
                </Text>
                <Text customStyle={readMore}>Read more</Text>
              </CardContentContainer>
            </Card>
          </HighlightedCards>
        </FundBreakdown>
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
              <Text customStyle={infoTitle}>Last purchase 28d ago</Text>
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
