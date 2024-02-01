import axios from 'axios';

class SpaceXAPI {
  async getLaunches() {
    const response = await axios.get('https://api.spacexdata.com/v4/launches');
    return response.data;
  }
}

export default SpaceXAPI;