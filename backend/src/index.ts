import express from 'express';
import { createServer } from 'http';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import jwt from 'jsonwebtoken';
import cors from "cors";
import schema from './graphql/schemas/spacexLaunch.schema';
import resolvers from './graphql/resolvers/spacexLaunch.resolver';
import SpaceXAPI from './graphql/sources/spacexLaunch.source';
import userRoutes from "./rest/routes/users.route"

const app = express();
app.use(cors());
const httpServer = createServer(app); // Create an HTTP server
const secretKey = 'your-secret-key';


// Initialize SpaceX API data source
const spaceXAPI = new SpaceXAPI();

const context = ({ req }: { req: Request }) => ({
  dataSources: {
    spaceXAPI,
  },
  //@ts-ignore
  token: req.headers.authorization || null,
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: false,
  context,
}));

app.use('/users', (() => {
  console.log("index get /users")
  return userRoutes
})());

app.use('/playground', expressPlayground({ endpoint: '/graphql' }));

app.get("/bla", (req, res, next) => {
  console.log("hello, next here")
  next()
})

app.get("/bla", (req, res) => {
  res.send('GET request to the homepage bn')
  console.log("call done")
})


const port = 3000;

httpServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});