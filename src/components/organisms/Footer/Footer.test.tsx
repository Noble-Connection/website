import { act, render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';
import { ContentProvider } from '../../../contexts/content/ContentProvider';
import { mockContentContext } from '../../../__mocks__/mockContexts/mockContexts';

jest.mock('next/link', () => {
  return ({ children }: { children: JSX.Element }) => {
    return children;
  };
});

describe('Footer component', () => {
  const renderFooter = (): RenderResult =>
    render(
      <ContentProvider content={mockContentContext}>
        <Footer />
      </ContentProvider>,
    );

  it('renders correctly', () => {
    const { container } = renderFooter();

    expect(container).toMatchSnapshot();
  });

  it('directs user to the About Us page', async () => {
    const aboutUsText = mockContentContext.pages.aboutUs;
    const { getByText, queryByText } = renderFooter();

    act(() => {
      userEvent.click(getByText(aboutUsText));
    });

    await waitFor(() => {
      expect(queryByText(aboutUsText)).toBeInTheDocument();
    });
  });

  it('directs user to the Contact Us page', async () => {
    const { getByText, queryByText } = renderFooter();

    const contactUsLink = mockContentContext.pages.contactUs;

    act(() => {
      userEvent.click(getByText(contactUsLink));
    });

    await waitFor(() => {
      expect(queryByText(contactUsLink)).toBeInTheDocument();
    });
  });

  it('directs user to the Donate page', async () => {
    const { getByText, queryByText } = renderFooter();

    const donateLink = mockContentContext.pages.donate;

    act(() => {
      userEvent.click(getByText(donateLink));
    });

    await waitFor(() => {
      expect(queryByText(donateLink)).toBeInTheDocument();
    });
  });
});
