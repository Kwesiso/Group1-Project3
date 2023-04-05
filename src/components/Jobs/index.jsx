import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { searchJobs } from "../../constants/fetchFromApi";
import { lookup } from "../../assets";
import { featuredCompanies } from "../../constants/index";
import Button from "../Button";
import { ImSpinner2 } from "react-icons/im";
import * as J from './styles'

const Jobs = ({ innerRef }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs
  // useEffect(() => {
  //   searchJobs("software developer", 1).then((data) => {
  //     setJobs(data);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <J.JobsStyled>
      <J.JobsContainer ref={innerRef}>
        <J.Heading>
          Latest <J.Span>tech jobs</J.Span>
        </J.Heading>

        <J.JobsPresentation>
          <J.ListContainer>
            {loading ? (
              <J.LoadingSpinner>
                <ImSpinner2 />
              </J.LoadingSpinner>
            ) : (
              jobs.map((job) => <JobCard key={job.job_id} {...job} />)
            )}
          </J.ListContainer>

          <J.AsideContainer>
            <J.SearchJobs>
              <J.Title>Search jobs</J.Title>
              <J.SearchInput
                type="text"
                placeholder="Search for jobs"
                required={true}
                maxLength="256"
                bg={lookup}
              />
            </J.SearchJobs>

            <J.FeaturedCompaniesContainer>
              <J.ContainerTitle>Featured companies</J.ContainerTitle>
              <J.CompaniesList>
                {featuredCompanies.map((company) => (
                  <J.CompanyItem key={company.id}>
                    <J.CompanyLogo src={company.logo} alt="company-logo" />
                    <J.CompanyDetails>
                      <J.CompanyTitle>{company.title}</J.CompanyTitle>
                      <J.CompanyType>{company.type}</J.CompanyType>
                    </J.CompanyDetails>
                  </J.CompanyItem>
                ))}
              </J.CompaniesList>
            </J.FeaturedCompaniesContainer>
          </J.AsideContainer>
        </J.JobsPresentation>

        <J.ButtonContainer>
          <Button
            type1="primary"
            type2="large"
            href="/jobs"
            value="Browse all jobs"
          />
        </J.ButtonContainer>
      </J.JobsContainer>
    </J.JobsStyled>
  );
};

export default Jobs;
