import type { NextPage } from 'next';
import { Footer } from '../../components/organisms/Footer/Footer';
import { IContentContext } from '../../contexts/content/types';
import { content } from '../../../content/content.mjs';

export const getStaticProps = async (): Promise<{
  props: {
    content: IContentContext;
  };
}> => {
  return {
    props: {
      content,
    },
  };
};

const AboutUs: NextPage = () => <Footer />;

export default AboutUs;
