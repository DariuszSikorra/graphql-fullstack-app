import { Section, Title } from "@/components/shared/Containers";
import { Typography, styled } from "@mui/material";
import SectionContainer from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(Section)`
  padding-top: 20%;
`;

const StyledTitlePaper = styled(Title)`
  width: 60%;
  margin: auto;
`;

const Summary: React.FC = () => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default Summary;
