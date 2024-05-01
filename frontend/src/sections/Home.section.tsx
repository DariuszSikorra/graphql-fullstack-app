import { SectionContainer, TitleContainer } from "components/shared/containers";
import theme from "@/theme";
import { Grid, Paper, Typography, styled } from "@mui/material";
import SectionWrapper from "components/shared/SectionContainer";
import React from "react";

const StyledSection = styled(SectionContainer)`
  padding-top: 10%;
`;

const StyledPhotoGrid = styled(Grid)`
  width: 400;
  padding: ${theme.spacing(2)};
`;

const StyledPhoto = styled(Paper)`
  width: 100%;
  height: 600px;
  background-image: url(my_photo.jpg);
  background-position: center;
  background-size: cover;
`;

const StyledTitleGrid = styled(Grid)`
  padding: ${theme.spacing(2)};
`;

const Home: React.FC = () => {
  return (
    <SectionWrapper>
      <StyledSection container>
        <StyledPhotoGrid xs={12} sm={6} item>
          <StyledPhoto elevation={13} />
        </StyledPhotoGrid>
        <StyledTitleGrid xs={12} sm={6} item>
          <TitleContainer variant="outlined">
            <Grid component="div">
              <Typography component="h1" variant="h3" align="center">
                Dariusz Sikorra
              </Typography>
              <br />
              <Typography component="h2" variant="h4" align="center">
                Fullstack Engineer
              </Typography>
            </Grid>
          </TitleContainer>
        </StyledTitleGrid>
      </StyledSection>
    </SectionWrapper>
  );
};

export default Home;
