import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from '@chakra-ui/react';
import { useContent } from '../../../contexts/content/useContent';
import logo from '../../../../public/images/noble-connection-logo.png';

export const Logo = (): JSX.Element => {
  const {
    links: { home },
  } = useContent();

  return (
    <NextLink href={home} passHref>
      <Link>
        <Image
          src={logo}
          alt="Noble Connection Logo"
          height={125}
          width={125}
        />
      </Link>
    </NextLink>
  );
};
