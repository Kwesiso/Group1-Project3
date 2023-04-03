import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%;
  padding: var(--space-20) 0;
  background: var(--color-white);
  box-shadow: 0 2px 30px 0 rgba(12, 53, 115, 0.1);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-16);
  gap: var(--space-16);
`;

export const LogoContainer = styled.a`
  flex: 1.5;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const MobileMenu = styled.div`
  flex: 1;
  display: flex;
  max-height: 1.7rem;
  max-width: 1.7rem;
  transition: transform 3s ease;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div`
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
`;

export const MenuIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const MobileNav = styled.div`
  width: 100%;
  height: fit-content;
  padding: var(--space-16) 0;
  position: absolute;
  bottom: 0px;
  right: 0px;
  top: 5rem;
  background: var(--color-white);
  box-shadow: 0 4px 10px 0 rgba(74, 58, 255, 0.18);

  transform: translateY(${(props) => (props.openMobileNav ? "0%" : "-100%")});
  visibility: ${(props) => (props.openMobileNav ? "visible" : "hidden")};
  transition: all 0.4s ease-in-out 0s;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--space-36) 0;
  gap: var(--space-40);
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  padding: 0 var(--space-16);
`;

export const NavItem = styled.li`
  padding: 0 var(--space-10);
  font-weight: 600;
  font-size: var(--paragraph-large-sm);
  color: ${(props) =>
    props.active ? "var(--color-primary-1)" : "var(--color-neutral-700)"};
`;

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  border-top: 1px solid var(--color-neutral-200);
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-16);
  padding: var(--space-16);

  @media (min-width: 640px) {
    max-width: 19rem;
  }
`;