import Image from 'next/image';
import logo from '../../../../public/images/noble-connection-logo.png';

export const Logo = (): JSX.Element => (
  <Image src={logo} alt="Noble Connection Logo" height={125} width={125} />
);
