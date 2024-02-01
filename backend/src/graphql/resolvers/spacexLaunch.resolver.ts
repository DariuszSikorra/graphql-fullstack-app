import { Request } from 'express';

const root = {
  hello: () => 'Hello, GraphQL World!',
  spacexLaunches: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
    try {
      // Fetch SpaceX launch data using a data source (axios, fetch, etc.)
      const launches = await dataSources.spaceXAPI.getLaunches();
      return launches;
    } catch (error) {
        console.error('Error fetching SpaceX launches:', error);
      throw new Error('Failed to fetch SpaceX launches');
    }
  },
};

export default root;