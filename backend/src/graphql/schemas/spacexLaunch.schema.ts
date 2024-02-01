import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
    spacexLaunches: [SpaceXLaunch]
  }
  
  type SpaceXLaunch {
    id: String
    name: String
    date_utc: String
    success: Boolean
  }
`);

export default schema;