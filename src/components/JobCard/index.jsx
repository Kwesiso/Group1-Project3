import React from "react";
import { logo_facebook, time } from "../../assets";
import { Link } from "react-router-dom";
import * as J from "./styles";

const JobCard = ({
  employer_website,
  employer_logo,
  employer_name,
  job_id,
  job_title,
  job_employment_type,
  job_posted_at_datetime_utc,
}) => {
  const d = new window.Date(
    job_posted_at_datetime_utc?.slice(0, 10).split("-")
  );

  return (
    <J.JobCardStyled>
      <J.JobCardContainer>
        <J.LogoContainer href={employer_website} target="_blank">
          {employer_logo && <J.Logo src={employer_logo} alt="logo" />}
        </J.LogoContainer>

        <J.ContentContainer>
          <J.Company href={employer_website} target="_blank">
            {employer_name}
          </J.Company>
          <Link to={`jobs/${job_id}`}>
            <J.JobTitle>{job_title}</J.JobTitle>
          </Link>

          <J.JobTypeContainer>
            <J.Icon src={time} alt="job-type" />
            <J.Type>{job_employment_type}</J.Type>
          </J.JobTypeContainer>
        </J.ContentContainer>

        <J.Footer>
          <J.Date>
            {d.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </J.Date>
        </J.Footer>
      </J.JobCardContainer>
    </J.JobCardStyled>
  );
};

export default JobCard;
