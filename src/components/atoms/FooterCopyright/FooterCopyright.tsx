import { Text } from '@chakra-ui/react';
import { useContent } from '../../../contexts/content/useContent';

export const FooterCopyright = (): JSX.Element => {
  const date = new Date();
  const getYear = date.getFullYear();
  const { charityName, footer: { copyright } } = useContent();

  return <Text>{`${copyright} ${getYear} ${charityName}`}</Text>;
};
