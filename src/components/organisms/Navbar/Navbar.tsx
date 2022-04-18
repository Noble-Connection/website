import { useDisclosure, useMediaQuery, Box, Stack } from '@chakra-ui/react';
import { Logo } from '../../atoms/Logo/Logo';
import { MobileToggleNavbar } from '../../atoms/MobileToggleNavbar/MobileToggleNavbar';
import { NavbarLinks } from '../../molecules/NavbarLinks/NavbarLinks';
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
