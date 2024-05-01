import TechnologyTable from "@/components/Technologies/TechnologyTable";
import { SectionContainer } from "components/shared/containers";
import { styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(SectionContainer)`
  padding-top: 10%;
  justify-content: center;
`;

const Technologies: React.FC = () => {
  return (
    <SectionWrapper>
      <StyledSection>
        <TechnologyTable />
      </StyledSection>
    </SectionWrapper>
  );
};

export default Technologies;
