import type { NextPage } from 'next';
import { Navbar } from 'src/components/organisms/Navbar/Navbar';
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

const ContactUs: NextPage = () => (
  <>
    <Navbar />
    <Footer />
  </>
);

export default ContactUs;
