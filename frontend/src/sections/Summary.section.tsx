import { SectionContainer, TitleContainer } from "components/shared/containers";
import Title from "@/components/shared/Title";
import { Typography, styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(SectionContainer)`
  padding-top: 20%;
`;

const StyledTitlePaper = styled(TitleContainer)`
  width: 60%;
  margin: auto;
`;

const Summary: React.FC = () => {
  return (
    <SectionWrapper>
      <Title text="Summary" />
      <StyledSection>
        <StyledTitlePaper
          variant="outlined"
        >
          <Typography component="h4" variant="h4" align="center">
            Hello! I’m a JavaScript Engineer with 5 years of work experience. I
            work primarily in a Frontend (React, Typescript, Next.js)
            environment but occasionally use Node.js to handle Backend tasks.
            Usually, I work on projects in a Scrum/Kanban system with the
            Clients and occasionally I fulfil myself as a mentor or a recruiter.
          </Typography>
        </StyledTitlePaper>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Summary;
