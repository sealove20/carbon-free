import Text from '@components/Text/Text';
import {
  InfoAndStatsContainer,
  InfoLayoutContainer,
  GroupInfoContainer,
  infoAndStatsTitle,
} from './infoAndStats.styles';
import {Info} from './Info';

export function InfoAndStats() {
  return (
    <InfoAndStatsContainer>
      <Text customStyle={infoAndStatsTitle}>Info & Stats</Text>
      <InfoLayoutContainer>
        <GroupInfoContainer>
          <Info title="AUM" content="$430.88m" />
          <Info title="Vintage Range" content="2019 - 2022" />
          <Info title="Price at Close" content="$17.68" />
        </GroupInfoContainer>
        <GroupInfoContainer>
          <Info title="Issue Date" content="18/04/2022" />
          <Info title="TER" content="0.15%" />
          <Info title="Price at Open" content="$17.74" />
        </GroupInfoContainer>
      </InfoLayoutContainer>
    </InfoAndStatsContainer>
  );
}
