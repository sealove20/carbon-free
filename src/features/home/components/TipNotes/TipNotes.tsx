import Text from '@components/Text/Text';
import {
  TipNotesContainer,
  tipNotesText,
  tipNotesTextInformation,
} from './tipNote.styles';

export function TipNotes() {
  return (
    <TipNotesContainer>
      <Text customStyle={tipNotesText}>
        Please note that prices are for reference only and may vary at the time
        of excecuting a buy or sell order.
      </Text>
      <Text customStyle={tipNotesTextInformation}>
        The information provided is not investment advice, and should not be
        used as a recommendation to buy or sell assets.
      </Text>
    </TipNotesContainer>
  );
}
