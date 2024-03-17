import { Section } from "@/components/shared/Containers";
import { styled } from "@mui/material";
import SectionContainer from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(Section)`
  padding-top: 20%;
`;

const Experience: React.FC = () => {
  return (
    <SectionContainer>
      <StyledSection>
        <div style={{ border: "1px solid red", width: "100%", height: "100%" }}>
          Experience
        </div>
      </StyledSection>
    </SectionContainer>
  );
};

export default Experience;
