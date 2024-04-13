import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

const technologyData = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js/React",
      "Typescript",
      "Tailwind/MUI",
      "jQuery",
      "Vite",
      "Zustand",
      "React-Router",
      "React-Select",
      "React-Hook-Form",
    ],
  },
  {
    category: "Backend",
    technologies: ["Django", "Python", "Node.js", "Nest.js", "Express.js"],
  },
  {
    category: "DevOps",
    technologies: ["Docker", "Datadog", "Swagger", "Puppeteer", "Webpack"],
  },
  {
    category: "APIs & Middleware",
    technologies: ["REST", "GraphQL(Apollo)", "Socket.io", "Websockets"],
  },
  {
    category: "Authentication & Communication",
    technologies: ["Keycloak", "Rocketchat"],
  },
  {
    category: "State Management",
    technologies: ["Redux (Redux Toolkit)", "Zustand"],
  },
  {
    category: "Testing & CI",
    technologies: ["Jest", "Cypress (from Webdriver.io)", "GitHub CI"],
  },
  { category: "Design & Prototyping", technologies: ["Figma"] },
  {
    category: "Project Management & Collaboration",
    technologies: ["Scrum (Agile)"],
  },
  {
    category: "Miscellaneous",
    technologies: [
      "Microservices",
      "Web components",
      "External hosting solutions",
      "and many other external services",
    ],
  },
];

const StyledTableContainer = styled(Paper)`
  width: 80%;
`;

const TechnologyTable = () => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type of Technology</TableCell>
            <TableCell>Technologies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {technologyData.map((category, index) => (
            <TableRow key={index}>
              <TableCell>{category.category}</TableCell>
              <TableCell>{category.technologies.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TechnologyTable;
