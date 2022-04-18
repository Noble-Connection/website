import { FooterCopyright } from '@/components/atoms/FooterCopyright/FooterCopyright';
import { FooterCharityRegistrationDetails } from '@/components/atoms/FooterCharityRegistrationDetails/FooterCharityRegistrationDetails';

export const FooterCharityInformation = (): JSX.Element => {
  return (
    <div>
      <FooterCharityRegistrationDetails />
      <br />
      <FooterCopyright />
    </div>
  );
};
