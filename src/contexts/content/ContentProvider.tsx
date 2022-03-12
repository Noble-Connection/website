import { ContentContext } from './ContentContext';
import { IContentContext } from './types';

export const ContentProvider: (params: {
  children: JSX.Element;
  content: IContentContext;
}) => JSX.Element = ({ content, children }) => (
  <ContentContext.Provider value={content}>{children}</ContentContext.Provider>
);
