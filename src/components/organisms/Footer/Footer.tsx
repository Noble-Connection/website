import { Box } from '@chakra-ui/react';
import { FooterCopyright } from '../../atoms/FooterCopyright/FooterCopyright';
import { SocialMediaIcons } from '../../molecules/SocialMediaIcons/SocialMediaIcons';
import { FooterContactDetails } from '../../atoms/FooterContactDetails/FooterContactDetails';
import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Box className={styles.footerContainer}>
        <FooterCopyright />
        <SocialMediaIcons />
        <FooterContactDetails />
      </Box>
    </footer>
  );
};
