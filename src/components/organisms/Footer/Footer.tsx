import { SocialMediaIcons } from '../../molecules/SocialMediaIcons/SocialMediaIcons';
import { FooterPageLinks } from '../../molecules/FooterPageLinks/FooterPageLinks';
import { FooterContactDetails } from '../../molecules/FooterContactDetails/FooterContactDetails';
import { FooterCharityInformation } from '../../molecules/FooterCharityInformation/FooterCharityInformation';
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
