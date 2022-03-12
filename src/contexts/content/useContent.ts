import { useContext } from 'react';
import { ContentContext } from './ContentContext';
import { IContentContext } from './types';

export const useContent = (): IContentContext =>
  useContext<IContentContext>(ContentContext);
