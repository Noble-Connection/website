import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { IMobileToggleNavbarProps } from './types';

export const MobileToggleNavbar = ({
  onToggle,
  isOpen,
}: IMobileToggleNavbarProps): JSX.Element => {
  return (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Toggle navigation"
    />
  );
};
