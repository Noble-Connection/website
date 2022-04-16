import { useDisclosure, useMediaQuery, Box, Stack } from '@chakra-ui/react';
import { Logo } from 'src/components/atoms/Logo/Logo';
import { MobileToggleNavbar } from 'src/components/atoms/MobileToggleNavbar/MobileToggleNavbar';
import { NavbarLinks } from 'src/components/molecules/NavbarLinks/NavbarLinks';
import styles from './Navbar.module.scss';

export const Navbar = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <nav className={styles.navbar}>
      {isMobile ? (
        <>
          <Box className={styles.navbarContainer}>
            <MobileToggleNavbar onToggle={onToggle} isOpen={isOpen} />
            <Logo />
          </Box>
          {isOpen && (
            <>
              <Box bgColor="gray.500">
                <Stack padding="10px 0">
                  <NavbarLinks />
                </Stack>
              </Box>
            </>
          )}
        </>
      ) : (
        <Box className={styles.navbarContainer}>
          <Logo />
          <NavbarLinks />
        </Box>
      )}
    </nav>
  );
};
