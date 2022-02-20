import { Text } from '@chakra-ui/react';
import { useContent } from '../../../contexts/content/useContent';

export const FooterContactDetails = (): JSX.Element => {
  const { footer: { contactNumber, charityRegistrationDetails } } = useContent();

  return (
    <Text>{`${contactNumber} | ${charityRegistrationDetails}`}</Text>
  )
}
