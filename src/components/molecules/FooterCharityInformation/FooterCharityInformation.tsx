import { FooterCopyright } from '../../atoms/FooterCopyright/FooterCopyright';
import { FooterCharityRegistrationDetails } from '../../atoms/FooterCharityRegistrationDetails/FooterCharityRegistrationDetails';

export const FooterCharityInformation = (): JSX.Element => {
  return (
    <div>
      <FooterCharityRegistrationDetails />
      <br />
      <FooterCopyright />
    </div>
  );
};
