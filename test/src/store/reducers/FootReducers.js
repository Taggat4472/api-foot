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

/*
 * Reducers
 * ******** */
export function FootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_FOOT_DATA:
      return { data: action.payload };
  }
}

/*
 * Getters
 * ******* */
