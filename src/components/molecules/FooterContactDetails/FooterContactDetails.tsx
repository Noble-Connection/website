import { FooterAddress } from '@/components/atoms/FooterAddress/FooterAddress';
import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';
import { useContent } from '@/contexts/content/useContent';
import styles from './FooterContactDetails.module.scss';

export const FooterContactDetails = (): JSX.Element => {
  const { contactNumber, emailAddress } = useContent();
  const concatContactNumber = contactNumber.replace(/\s/g, '');

  return (
    <div className={styles.footerContactDetails}>
      <FooterAddress />
      <FooterLink href={`tel:+44${concatContactNumber}`}>
        {contactNumber}
      </FooterLink>
      <FooterLink href={`mailto:${emailAddress}`}>{emailAddress}</FooterLink>
    </div>
  );
};
