/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector (State)
 * **************** */
const initialState = {
  data: []
};

export function TopReducer(state = initialState, action) {
    switch(action.type){
      default:
        return state;
      case Actions.GET_TOP_DATA:
        return{ data: action.payload};
    }
  }