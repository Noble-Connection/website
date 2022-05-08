import NextLink from 'next/link';
import { Link, Text, useMediaQuery } from '@chakra-ui/react';
import { INavbarLinkProps } from './types';

export const NavbarLink = ({
  href,
  children,
}: INavbarLinkProps): JSX.Element => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <NextLink href={href} passHref>
      <Link
        height={10}
        paddingLeft={isMobile ? '10' : '0'}
        display="flex"
        alignItems="center"
        color={isMobile ? 'gray.200' : 'blue.900'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontSize="lg">{children}</Text>
      </Link>
    </NextLink>
  );
};
