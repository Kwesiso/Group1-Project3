import React, { useEffect, useRef, useState } from "react";
import * as H from "./styles";
import { clients } from "../../constants";
import Button from "../../components/Button";
import {
  bubble_1,
  bubble_2,
  bubble_3,
  bubble_4,
  bubble_5,
  bubble_6,
  lookup,
} from "../../assets";
import Jobs from "../../components/Jobs";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CTA from "../../components/CTA";

const Homepage = () => {
  const targets = useRef(new Set());

  const [entries, setObservedNodes] = useIntersectionObserver({
    // threshold: 1
  });

  useEffect(() => {
    setObservedNodes(() => [...targets.current]);
  }, [setObservedNodes]);

  useEffect(() => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0%) scale(100%)";
        entry.target.style.opacity = "1";

        setObservedNodes((observedNodes) =>
          observedNodes.filter((node) => node !== entry.target)
        );
      }
    }
  }, [entries, setObservedNodes]);

  return (
    <H.HomepageStyled>
      <H.Hero>
        <H.HeroContainer>
          <H.TextContainer ref={(element) => targets.current.add(element)}>
            <H.Header>
              <H.Span>Tech Jobs</H.Span> for Developers, Designers, and
              Marketers
            </H.Header>
            <H.Description>
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </H.Description>

            <H.SearchForm>
              <H.SearchInput
                placeholder="Search for jobs"
                maxlength="256"
                required={true}
                bg={lookup}
              />
              <Button
                type1="primary"
                type2="large"
                width="100%"
                value="Search Job"
                heroButton={true}
              />
            </H.SearchForm>
          </H.TextContainer>

          <H.Clients ref={(element) => targets.current.add(element)}>
            {clients.map((client) => (
              <H.ClientLogo
                key={client.id}
                src={client.logo}
                alt="client-logo"
              />
            ))}
          </H.Clients>
        </H.HeroContainer>

        <H.Bubble src={bubble_1} alt="bubble1" top="-4rem" left="-12rem" />
        <H.Bubble src={bubble_2} alt="bubble2" top="4rem" left="17.5rem" />
        <H.Bubble src={bubble_3} alt="bubble3" top="24rem" left="-2.6rem" />
        <H.Bubble src={bubble_4} alt="bubble4" top="-6rem" right="-13rem" />
        <H.Bubble src={bubble_5} alt="bubble5" top="30rem" right="-5rem" />
        <H.Bubble src={bubble_6} alt="bubble6" top="44rem" right="21rem" />
      </H.Hero>

      <Jobs innerRef={(element) => targets.current.add(element)} />
      <CTA />
    </H.HomepageStyled>
  );
};

export default Homepage;
