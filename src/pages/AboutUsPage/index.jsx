import React from "react";
import { Span } from "../../globals";
import styled from "styled-components";

export const AboutUsPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero = styled.section`
  width: 100%;
  padding: 5rem 0 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    // padding: 7.5rem 0;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  padding: 0 var(--space-16);
  max-width: var(--container-default-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-24);

  @media (min-width: 768px) {
    gap: var(--space-36);
  }
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

export const Description = styled.p`
  text-align: center;
  max-width: 950px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: var(--paragraph-default-lg);
    // line-height: var(--line-height-h1);
  }
`

export const Stats = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-48);
  margin-top: var(--space-48);
`

export const StatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
  min-width: fit-content;

  @media (min-width: 768px) {
  }
`

export const StatTitle = styled.h2`
  font-size: var(--heading-h1-sm);
  line-height: var(--line-height-h1);

  @media (min-width: 768px) {
    font-size: var(--display-2-lg);
  }
`

export const StatDescription = styled.p`
  font-size: var(--paragraph-large-sm);
  font-weight: 500;
  text-align: center;
`

const AboutUsPage = () => {
  return (
    <AboutUsPageStyled>
      <Hero>
        <HeroContainer>
          <Header>
            <Span>About</Span> Jobs
          </Header>
          <Description>
            As the fastest-growing online Job board, our mission is to help
            great individuals connect with great companies.
          </Description>
          <Stats>
            <StatContainer>
                <StatTitle>52<Span noLine>,</Span>015</StatTitle>
                <StatDescription>Jobs posted</StatDescription>
            </StatContainer>
            <StatContainer>
                <StatTitle>24<Span noLine>,</Span>325</StatTitle>
                <StatDescription>Successful hires</StatDescription>
            </StatContainer>
            <StatContainer>
                <StatTitle>1<Span noLine>,</Span>532</StatTitle>
                <StatDescription>Verified companies</StatDescription>
            </StatContainer>
            <StatContainer>
                <StatTitle>1<Span noLine>.</Span>2M</StatTitle>
                <StatDescription>Monthly visitors</StatDescription>
            </StatContainer>
          </Stats>
        </HeroContainer>
      </Hero>
    </AboutUsPageStyled>
  );
};

export default AboutUsPage;
