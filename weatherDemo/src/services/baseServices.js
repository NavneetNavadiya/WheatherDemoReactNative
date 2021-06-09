import axios from 'axios';

import {BASE_URL, GET_LIST} from './endPoints';

const BaseServices = {
  BASE_URL: BASE_URL,

  GetList: async () => {
    // Alert.alert(key)

    const data = await axios.get(
      `${GET_LIST}?lat=23.68&lon=90.35&cnt=50&appid=YOUR_API_KEY`,
    );
    return data;
  },
};

export default BaseServices;
