import NextLink from 'next/link';
import { Link, Text, useMediaQuery } from '@chakra-ui/react';
import { INavbarLinkProps } from './types';
import styles from './NavbarLink.module.scss';

export const NavbarLink = ({
  href,
  children,
}: INavbarLinkProps): JSX.Element => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <NextLink href={href} passHref>
      <Link
        className={styles.navbarLink}
        height={10}
        paddingLeft={isMobile ? '10' : '0'}
        display="flex"
        alignItems="center"
      >
        <Text fontSize="lg">{children}</Text>
      </Link>
    </NextLink>
  );
};
