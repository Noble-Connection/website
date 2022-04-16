import { ReactNode } from 'react';

export interface INavbarLinkProps {
  href: string;
  color?: string;
  textDecoration?: string;
  children: ReactNode;
}
