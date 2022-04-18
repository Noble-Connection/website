import { render, RenderResult } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/provider';
import Home from '../pages/index';
import { ContentProvider } from '../contexts/content/ContentProvider';
import { mockContentContext } from '../__mocks__/mockContexts/mockContexts';

describe('Home page', () => {
  const renderHomePage = (): RenderResult =>
    render(
      <ChakraProvider>
        <ContentProvider content={mockContentContext}>
          <Home />
        </ContentProvider>
      </ChakraProvider>,
    );

  it('should render page unchanged', () => {
    const { container } = renderHomePage();

    expect(container).toMatchSnapshot();
  });
});
