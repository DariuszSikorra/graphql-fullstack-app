import theme from "../theme";
import { Link } from "react-scroll";
import styled from "@emotion/styled";

const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-direction: column;
  right: 0;
  height: 100vh;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin: ${theme.spacing(1)};
`

export {
  StyledNavigation,
  StyledLink
}