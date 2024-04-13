import { Box, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)`
  position: absolute;
  top-4;
`;

const Title = ({ text }: { text: string }) => {
  return (
    <StyledBox>
      <Typography component="h1" variant="h3" color="white">
        {text}
      </Typography>
    </StyledBox>
  );
};

export default Title;
