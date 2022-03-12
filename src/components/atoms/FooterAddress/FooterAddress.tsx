import { Text } from '@chakra-ui/react';
import { useContent } from '../../../contexts/content/useContent';
import styles from './FooterAddress.module.scss';

export const FooterAddress = (): JSX.Element => {
  const {
    footer: {
      address: { registeredOfficeText, firstLine, town, postcode, country },
    },
  } = useContent();

  return (
    <>
      <address className={styles.address}>
        <Text className={styles.registeredAddress}>{registeredOfficeText}</Text>
        <Text>{firstLine}</Text>
        <Text>{town}</Text>
        <Text>{postcode}</Text>
        <Text>{country}</Text>
      </address>
    </>
  );
};
