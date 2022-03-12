import { Text } from '@chakra-ui/react';
import { useContent } from '../../../contexts/content/useContent';

export const FooterCharityRegistrationDetails = (): JSX.Element => {
  const {
    footer: { charityRegistrationDetails },
  } = useContent();

  return <Text>{charityRegistrationDetails}</Text>;
};
