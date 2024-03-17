import theme from "@/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

const TitleContainer = styled(Box)``;

const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;

const spaces = css`
  margin: ${theme.spacing(2)};
`;

const PhotoContainer = styled(Paper)`
  ${spaces}
  max-width: 400px;
  height: fit-content;
`;

const StyledPaper = styled(Paper)`
  width: 400px;
  height: 600px;
  background-image: url(my_photo.jpg);
  background-position: center;
  background-size: cover;
`;

const SummaryContainer = styled(Paper)`
  ${spaces}
  max-width: 80%;
`;

export {
  TitleContainer,
  ContentContainer,
  PhotoContainer,
  StyledPaper,
  SummaryContainer,
};
