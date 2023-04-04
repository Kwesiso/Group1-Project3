import React from "react";
import styled from "styled-components";

export const JobsStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-56);
  padding-bottom: var(--space-72);
  background: var(--color-neutral-100);
`;

export const JobsContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  padding: 0 var(--space-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-32);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h2`
  font-size: var(--heading-h2-sm);
  line-height: var(--line-height-h2-sm);
  color: var(--color-neutral-700);

  @media (min-width: 768px) {
    font-size: var(--heading-h2-lg);
    line-height: var(--line-height-h2-lg);
  }
`;

export const Span = styled.span`
  color: var(--color-primary-1);

  &:after {
    content: "";
    width: 100%;
    height: 0.2rem;
    display: inline-block;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--space-24);
  }
`;

const Jobs = () => {
  return (
    <JobsStyled>
      <JobsContainer>
        <Heading>
          Latest <Span>tech jobs</Span>
        </Heading>

        <ListContainer>
            
        </ListContainer>
      </JobsContainer>
    </JobsStyled>
  );
};

export default Jobs;
