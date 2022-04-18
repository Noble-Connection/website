import { SocialMediaIcons } from '@/components/molecules/SocialMediaIcons/SocialMediaIcons';
import { FooterPageLinks } from '@/components/molecules/FooterPageLinks/FooterPageLinks';
import { FooterContactDetails } from '@/components/molecules/FooterContactDetails/FooterContactDetails';
import { FooterCharityInformation } from '@/components/molecules/FooterCharityInformation/FooterCharityInformation';
import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footerContainer}>
      <SocialMediaIcons />
      <FooterPageLinks />
      <FooterContactDetails />
      <FooterCharityInformation />
    </footer>
  );
};
