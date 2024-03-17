import theme from "@/theme";
import { Grid, Paper, styled } from "@mui/material";

export const Section = styled(Grid)`
  display: flex;
  flex-grow: 1;
  padding-top: 20%;
  align-items: center;
  flex-wrap: wrap;
`;

export const Title = styled(Paper)`
  background-color: ${theme.palette.background.paper};
  color: white;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
`;
