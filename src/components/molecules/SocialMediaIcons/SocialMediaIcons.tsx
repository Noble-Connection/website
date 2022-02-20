import Link from 'next/link';
import { Box, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useContent } from '../../../contexts/content/useContent';

export const SocialMediaIcons = (): JSX.Element => {
  const { links } = useContent();

  return (
    <Box>
      <Link href={links.facebook}>
        <a>
          <Icon as={FaFacebook} />
        </a>
      </Link>
      <Link href={links.twitter}>
        <a>
          <Icon as={FaTwitter} />
        </a>
      </Link>
      <Link href={links.youtube}>
        <a>
          <Icon as={FaYoutube} />
        </a>
      </Link>
    </Box>
  );
};
