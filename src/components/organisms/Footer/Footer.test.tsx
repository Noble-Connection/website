import { act, render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChakraProvider } from '@chakra-ui/provider';
import { Footer } from './Footer';
import { ContentProvider } from '@/contexts/content/ContentProvider';
import { mockContentContext } from '@/mocks/mockContexts/mockContexts';

jest.mock('next/link', () => {
  return ({ children }: { children: JSX.Element }) => {
    return children;
  };
});

describe('Footer component', () => {
  const renderFooter = (): RenderResult =>
    render(
      <ChakraProvider>
        <ContentProvider content={mockContentContext}>
          <Footer />
        </ContentProvider>
      </ChakraProvider>,
    );

  it('should direct user to the About Us page', async () => {
    const aboutUsText = mockContentContext.navigation[0].label;
    const { getByText, queryByText } = renderFooter();

    act(() => {
      userEvent.click(getByText(aboutUsText));
    });

    await waitFor(() => {
      expect(queryByText(aboutUsText)).toBeInTheDocument();
    });
  });

  it('should direct user to the Contact Us page', async () => {
    const { getByText, queryByText } = renderFooter();

    const contactUsLink = mockContentContext.navigation[1].label;

    act(() => {
      userEvent.click(getByText(contactUsLink));
    });

    await waitFor(() => {
      expect(queryByText(contactUsLink)).toBeInTheDocument();
    });
  });

  it('should direct user to the Donate page', async () => {
    const { getByText, queryByText } = renderFooter();

    const donateLink = mockContentContext.navigation[2].label;

    act(() => {
      userEvent.click(getByText(donateLink));
    });

    await waitFor(() => {
      expect(queryByText(donateLink)).toBeInTheDocument();
    });
  });
});
