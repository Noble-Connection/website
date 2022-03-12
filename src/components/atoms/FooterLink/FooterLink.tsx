import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { IFooterLinkProps } from './types';

export const FooterLink = ({
  href,
  color = 'blue.900',
  textDecoration = 'none',
  children,
}: IFooterLinkProps): JSX.Element => {
  return (
    <NextLink href={href} passHref>
      <Link color={color} textDecoration={textDecoration}>
        {children}
      </Link>
    </NextLink>
  );
};
