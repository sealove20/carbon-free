import Text from '@components/Text/Text';
import {EarnRewardsContainer, earnText} from './earRewards.styles';
import {FontAwesome5} from '@expo/vector-icons';

export function EarRewards() {
  return (
    <EarnRewardsContainer>
      <FontAwesome5 name="coins" size={14} color="purple" />
      <Text customStyle={earnText}>Earn Rewards</Text>
    </EarnRewardsContainer>
  );
}
