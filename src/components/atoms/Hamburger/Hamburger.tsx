import { IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const Hamburger = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <IconButton
      onClick={onToggle}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Toggle navigation"
    />
  );
};
