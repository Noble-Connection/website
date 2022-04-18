import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';
import { useContent } from '@/contexts/content/useContent';
import styles from './FooterPageLinks.module.scss';

export const FooterPageLinks = (): JSX.Element => {
  const { navigation } = useContent();

  return (
    <div className={styles.footerPageLinksContainer}>
      {navigation.map(({ href, label }) => (
        <FooterLink href={href} key={label}>
          {label}
        </FooterLink>
      ))}
    </div>
  );
};
