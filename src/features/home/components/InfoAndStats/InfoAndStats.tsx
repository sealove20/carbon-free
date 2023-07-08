import Text from '@components/Text/Text';
import {
  InfoAndStatsContainer,
  ContentContainer,
  GroupContainer,
  GroupInfoContainer,
  InfoContainer,
  infoAndStatsTitle,
  infoTitle,
  infoContent,
} from './infoAndStats.styles';
import {Feather} from '@expo/vector-icons';

export function InfoAndStats() {
  return (
    <InfoAndStatsContainer>
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
    </InfoAndStatsContainer>
  );
}
