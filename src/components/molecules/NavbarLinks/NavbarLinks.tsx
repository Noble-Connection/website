import { useMediaQuery } from '@chakra-ui/react';
import { NavbarLink } from 'src/components/atoms/NavbarLink/NavbarLink';
import { useContent } from 'src/contexts/content/useContent';

export const NavbarLinks = (): JSX.Element => {
  const { navigation } = useContent();
  const [isTablet] = useMediaQuery('(min-width: 769px)');

  return (
    <>
      {navigation.map(({ href, label }) => (
        <NavbarLink
          href={href}
          key={label}
          color={isTablet ? 'blue.900' : 'gray.200'}
        >
          {label}
        </NavbarLink>
      ))}
    </>
  );
};
