import styled from "styled-components";

export const HomepageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero = styled.section`
  width: 100%;
  padding: 7.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  width: 100%;
  padding: 0 var(--space-16);
  max-width: 670px;
`;

export const Clients = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-38);
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s ease 0.3s;
`;

export const ClientLogo = styled.img`
  max-width: 100%;
  margin: var(--space-10) var(--space-22);
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: var(--space-16);
  transform: scale(${props => props.isIntersecting ? '100%' : '50%'});
  opacity: ${props => props.isIntersecting ? '1' : '0'};
  transition: all 0.3s ease 0.3s;
`;

export const Header = styled.h1`
  font-size: var(--display-3-sm);
  line-height: var(--line-height-h2);
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: var(--heading-h1-sm);
    line-height: var(--line-height-h1);
  }
`;

export const Span = styled.span`
  color: var(--color-primary-1);
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background: var(--color-primary-1);
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width: 768px) {
      height: 0.3rem;
    }
  }
`;

export const Description = styled.p``;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: var(--space-16);
  gap: var(--space-24);
  position: relative;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-position: 1.25rem 50%;
  background-size: auto;
  background-repeat: no-repeat;
  padding-left: var(--space-56);

  @media (min-width: 640px) {
    height: 6rem;
    padding-right: 40%;
  }
`;

export const Bubble = styled.img`
  position: absolute;
  z-index: -1;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;