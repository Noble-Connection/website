import { ReactNode } from 'react';

export interface IFooterLinkProps {
  href: string;
  color?: string;
  textDecoration?: string;
  children: ReactNode;
}
