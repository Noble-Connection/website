// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next.js image stub';
  },
}));
