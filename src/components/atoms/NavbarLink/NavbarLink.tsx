import NextLink from 'next/link';
import { Link, Text } from '@chakra-ui/react';
import { INavbarLinkProps } from './types';

export const NavbarLink = ({
  href,
  color,
  textDecoration = 'none',
  children,
}: INavbarLinkProps): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <Link
        color={color}
        textDecoration={textDecoration}
        height={10}
        paddingLeft={10}
        display="flex"
        alignItems="center"
      >
        <Text fontSize="lg">{children}</Text>
      </Link>
    </NextLink>
  );
};
