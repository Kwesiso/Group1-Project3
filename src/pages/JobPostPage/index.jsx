import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


export const JobsPostPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JobPresentation = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-56) 0 7.5rem;
`;

export const JobPresentationContainer = styled.div`
  width: 100%;
  padding: 0 var(--space-16);
  max-width: var(--container-default-max-width);
`;



const JobPostPage = () => {
  const { id } = useParams();

  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   jobDetails(`${id}`).then((data) => {
  //     setJobData(data);
  //     setLoading(false);
  //   });
  // }, [id]);

  return (
    <JobsPostPageStyled>
      <JobPresentation>
        <JobPresentationContainer>

        </JobPresentationContainer>
      </JobPresentation>
    </JobsPostPageStyled>
  );
};

export default JobPostPage;
