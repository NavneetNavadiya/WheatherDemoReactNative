import {combineReducers} from 'redux';
import axios from 'axios';

import {GET_LIST} from '../services/endPoints';
import BaseServices from '../services/baseServices';
const INITIAL_STATE = {
  current: [],
  possible: ['Alice', 'Bob', 'Sammy'],
};

const friendsReducer = async (state = INITIAL_STATE, action) => {
  var {current, possible} = state;
  switch (action.type) {
    case 'GET_LIST':
      try {
        const {data} = await BaseServices.GetList();
        //   console.log('the data', data);
        possible = data.list;
      } catch (error) {
        //   console.log('getList error', error);
      }
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex

      // Finally, update the redux state
      const newState = {current, possible};
      //   console.log('this is new state', newState);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  friends: friendsReducer,
});
