import { SectionContainer, TitleContainer } from "components/shared/containers";
import { Typography, styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(SectionContainer)`
  padding-top: 20%;
`;

const Experience: React.FC = () => {
  return (
    <SectionWrapper>
      <StyledSection>
        <TitleContainer variant="outlined">
          <Typography component="p" align="center">
            Fullstack engineer, Freelancing, Feb 2024 - now: Client- Polish
            auction site (Clemens): Rewriting service from Django + jQuery SSR
            to Next.js/React, Expanding application with new features, Used
            technologies: Next.js/React, Typescript, Next.js, Tailwind/MUI,
            Python, Django, jQuery. FullStack developer React, Scalac, Feb 2020
            - Jan 2024: Client- British job sharing (AUXI) platform- 1 year:
            Rework of the whole application to new mockups and API, Translate
            user requirements into the overall architecture and implement it,
            Deciding on used technologies in the project, Used technologies:
            React, Typescript, Vite, Tailwind/MUI, Keycloak, Rocketchat,
            Websockets, Zustand, REST, Miscroservices, React-Router,
            React-Select, React-Hook-Form, Figma, Scrum(Agile). Client- in
            American Insurance platform (Rally Health/ Optum)- 2 years: Creating
            and implementing components from mockups with 100% unit test
            coverage, Design, code, and review optimised Frontend codebase,
            Taking part in application architecture planning, Working with API
            which aggregates multiple data sources, Leading team in the creation
            and maintaining e2e tests, Used technologies: Monorepo,
            React/Next.js, Nest.js, Typescript, GraphQl(Apollo), Webpack,
            Swagger, Docker, Datatog, Redux(Redux toolkit), Web components,
            Jest, Cypress(from Webdriver.io), Scrum(Agile). Client- German
            intralogistics platform (Buying Labs)- 2 years: Creating new
            features for the Frontend App in close contact with the client,
            Taking care of the automated testers team, planning e2e tests
            coverage, Writing new API features on the Backend side, translating
            Excel files to .json format. Used technologies: React, Node.js,
            Typescript, REST, Docker, Redux, Styled-Components, Express.js,
            Socket.io, Swagger, Puppeetier, Webpack. Junior frontend developer,
            Own Company, Feb 2019 - Feb 2020: Minor freelancing projects- 1
            year: Creating new SPA (Single Page Applications) for clients,
            Testing applications and new features, Implementing external
            solutions for tasks handling (e.g. sending emails) Used
            technologies: React, REST, Github Pages, Github CI, external hosting
            solutions, many other external services.
          </Typography>
        </TitleContainer>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Experience;
