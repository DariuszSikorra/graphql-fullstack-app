import ROUTES from "../routes/routes";
import { Fab, Tooltip } from "@mui/material";
import { capitalizeFirstLetter } from "helpers/stringModifiers";
import { StyledLink, StyledNavigation } from "./Navigation.styled";



const CustomLink = ({ route }: { route: string }) => (
  <StyledLink
    to={route}
    smooth={true}
    duration={500}
  >
    <Tooltip title={capitalizeFirstLetter(route)} placement="left">
      <Fab color="primary" aria-label="add" size="small" />
    </Tooltip>
  </StyledLink>
);

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <CustomLink route={ROUTES.home} />
      <CustomLink route={ROUTES.summary} />
      <CustomLink route={ROUTES.experience} />
      <CustomLink route={ROUTES.technologies} />
      <CustomLink route={ROUTES.projects} />
      <CustomLink route={ROUTES.contact} />
    </StyledNavigation>
  );
};

export default Navigation;
