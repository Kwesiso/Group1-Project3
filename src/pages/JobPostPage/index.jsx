import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { jobDetails } from "../../constants/fetchFromApi";
import JobCard from "../../components/JobCard";
import { location, money, time } from "../../assets";
import Button from "../../components/Button";

export const JobsPostPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-neutral-100);
`;

export const JobPresentation = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-56) 0 7.5rem;
  gap: var(--space-32);
`;

export const JobPresentationContainer = styled.div`
  width: 100%;
  padding: 0 var(--space-16);
  max-width: var(--container-default-max-width);
  display: flex;
  flex-direction: column;
  gap: var(--space-48);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const JobCardExtended = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--border-radius-lg);
  box-shadow: 4px 4px 12px 0 rgba(21, 60, 245, 0.05),
    0 2px 6px 0 rgba(5, 21, 46, 0.02);
  background: var(--color-white);
  padding: var(--space-48);
  gap: var(--space-32);
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-24);
  padding-bottom: var(--space-40);
  border-bottom: 0.1rem solid var(--color-neutral-200);

  @media (min-width: 768px) {
    gap: var(--space-16);
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-10);
`;

export const Divider = styled.div`
  @media (min-width: 768px) {
    width: 0.1rem;
    margin: 0 var(--space-24);
    background: var(--color-neutral-200);
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
`;

export const StatText = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const JobDescriptionTitle = styled.h2`
  font-size: var(--heading-h2-sm);
  line-height: var(--line-height-h2-sm);
  width: 100%;
`;

export const JobDescriptionText = styled.p`
  max-width: 100%;
`;

export const AsideContainer = styled.aside`
  width: 100%;
  height: fit-content;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 7px 8px 0 rgba(30, 54, 170, 0.08);
  padding: var(--space-36) var(--space-24);
  background: var(--color-white);

  @media (min-width: 1024px) {
    position: static;
    max-width: 30%;
  }
`;

export const FormTitle = styled.h3`
  font-size: var(--heading-h3-sm);
  margin-bottom: var(--space-24);
`;

export const ApplyForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: var(--space-36);

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Asterisk = styled.span`
  color: red;
`;

export const ApplyFormInput = styled.input`
  max-width: 100%;
`;

export const ApplyFormTextArea = styled.textarea`
  max-width: 100%;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const JobPostPage = () => {
  const { id } = useParams();

  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   jobDetails(id).then((data) => {
  //     setJobData(data);
  //     setLoading(false);
  //   });
  // }, [id]);

  return (
    <JobsPostPageStyled>
      <JobPresentation>
        <JobPresentationContainer>
          {/* Display job card */}
          {!loading && jobData?.length > 0 && (
            <JobCardExtended>
              <JobCard {...jobData[0]} inJobPostPage />
              <StatsContainer>
                <Stat>
                  <Icon src={time} alt="time" />
                  <StatText>
                    {jobData[0]?.job_employment_type || "N/A"}
                  </StatText>
                </Stat>
                <Divider />
                <Stat>
                  <Icon src={location} alt="time" />
                  <StatText>
                    {jobData[0]?.job_city || "N/A"},{" "}
                    {jobData[0]?.job_state || "N/A"}
                  </StatText>
                </Stat>
                <Divider />
                <Stat>
                  <Icon src={money} alt="time" />
                  <StatText>
                    ${jobData[0]?.job_min_salary || "N/A"} -{" "}
                    {jobData[0]?.job_max_salary || "N/A"} USD
                  </StatText>
                </Stat>
              </StatsContainer>

              <JobDescriptionTitle>Job Description</JobDescriptionTitle>
              <JobDescriptionText>
                <pre
                  style={{
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontWeight: "500",
                  }}
                >
                  {jobData[0]?.job_description}
                </pre>
              </JobDescriptionText>
            </JobCardExtended>
          )}

          <AsideContainer id="apply">
            <FormTitle>Ready to apply for this job opening?</FormTitle>
            <ApplyForm>
              <FormDiv>
                <label htmlFor="full-name">
                  Full Name<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="text"
                  placeholder="Sophie Moore"
                  name="full-name"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="email">
                  Email<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="email"
                  placeholder="sophie@email.com"
                  name="email"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="phone-number">
                  Phone Number<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="text"
                  placeholder="(123) 456-7890"
                  name="phone-number"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="job-category">
                  Job Category<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="text"
                  placeholder="Ex.: Development"
                  name="job-category"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="specialization">
                  Specialization<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="text"
                  placeholder="Ex.: Frontend"
                  name="specialization"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="skills">
                  Skills<Asterisk>*</Asterisk>
                </label>
                <ApplyFormTextArea
                  placeholder="Skill 1, Skill 2, Skill 3..."
                  name="skills"
                  required={true}
                  maxLength="5000"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="resume">
                  Resume<Asterisk>*</Asterisk>
                </label>
                <ApplyFormInput
                  type="text"
                  placeholder="Resume or Portfolio Link"
                  name="resume"
                  required={true}
                  maxLength="256"
                />
              </FormDiv>
              <FormDiv>
                <label htmlFor="notes">Notes</label>
                <ApplyFormTextArea
                  placeholder="If you would like to include any extra note or cover letter, please free to do it here."
                  name="notes"
                  maxLength="5000"
                />
              </FormDiv>
              <Button
                type1="primary"
                type2="large"
                value="Apply now"
                width="100%"
              />
            </ApplyForm>
          </AsideContainer>
        </JobPresentationContainer>
      </JobPresentation>
    </JobsPostPageStyled>
  );
};

export default JobPostPage;
