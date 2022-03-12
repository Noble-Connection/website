import { FooterLink } from '../../atoms/FooterLink/FooterLink';
import { useContent } from '../../../contexts/content/useContent';
import styles from './FooterPageLinks.module.scss';

export const FooterPageLinks = (): JSX.Element => {
  const { pages, links } = useContent();

  return (
    <div className={styles.footerPageLinksContainer}>
      <FooterLink href={links.aboutUs}>{pages.aboutUs}</FooterLink>
      <FooterLink href={links.contactUs}>{pages.contactUs}</FooterLink>
      <FooterLink href={links.donate}>{pages.donate}</FooterLink>
    </div>
  );
};
