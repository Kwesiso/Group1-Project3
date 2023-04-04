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

const Homepage = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    // Call observe
    observer.observe(ref.current);
    // console.log(isIntersecting);

    // Terminate the observation when the observed element unmounts
    return () => observer.disconnect();
  }, [isIntersecting]);

  // Add css styles when intersecting for the first time
  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.style.transform = "translateY(0%)";
        el.style.opacity = "1";
      });
    }
  }, [isIntersecting]);

  return (
    <H.HomepageStyled>
      <H.Hero>
        <H.HeroContainer ref={ref}>
          <H.TextContainer>
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

          <H.Clients isIntersecting={isIntersecting}>
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

      <Jobs />
    </H.HomepageStyled>
  );
};

export default Homepage;
