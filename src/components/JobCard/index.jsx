import React from "react";
import { time } from "../../assets";
import { Link } from "react-router-dom";
import * as J from './styles'

const JobCard = ({
  employer_website,
  employer_logo,
  employer_name,
  job_id,
  job_title,
  job_employment_type,
  job_posted_at_datetime_utc,
}) => {

  return (
    <J.JobCardStyled>
      <J.JobCardContainer>
        <J.LogoContainer href={employer_website}>
          <J.Logo src={employer_logo} alt="logo" />
        </J.LogoContainer>

        <J.ContentContainer>
          <J.Company href={employer_website}>{employer_name}</J.Company>
          <Link to={`jobs/${job_id}`}>
            <J.JobTitle>{job_title}</J.JobTitle>
          </Link>

          <J.JobTypeContainer>
            <J.Icon src={time} alt="job-type" />
            <J.Type>{job_employment_type}</J.Type>
          </J.JobTypeContainer>
        </J.ContentContainer>

        <J.Footer>
          <J.Date>{job_posted_at_datetime_utc?.slice(0, 10).split("-")}</J.Date>
        </J.Footer>
      </J.JobCardContainer>
    </J.JobCardStyled>
  );
};

export default JobCard;
