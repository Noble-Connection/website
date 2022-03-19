import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useContent } from '../../../contexts/content/useContent';
import styles from './SocialMediaIcons.module.scss';

export const SocialMediaIcons = (): JSX.Element => {
  const { links } = useContent();

  return (
    <Flex>
      <Link href={links.facebook}>
        <a>
          <FaFacebook size={21} />
        </a>
      </Link>
      <Link href={links.twitter}>
        <a className={styles.paddingLeft}>
          <FaTwitter size={21} />
        </a>
      </Link>
      <Link href={links.youtube}>
        <a className={styles.paddingLeft}>
          <FaYoutube size={21} />
        </a>
      </Link>
    </Flex>
  );
};
