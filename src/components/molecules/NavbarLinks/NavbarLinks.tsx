import { NavbarLink } from 'src/components/atoms/NavbarLink/NavbarLink';
import { useContent } from 'src/contexts/content/useContent';

export const NavbarLinks = (): JSX.Element => {
  const { navigation } = useContent();

  return (
    <>
      {navigation.map(({ href, label }) => (
        <NavbarLink href={href} key={label}>
          {label}
        </NavbarLink>
      ))}
    </>
  );
};
