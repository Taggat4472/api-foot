/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { CountriesReducer } from "./reducers/CountriesReducers";
import { FootReducer } from "./reducers/FootReducers";
import { TopReducer } from "./reducers/TopReducers";
/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  countries: CountriesReducer,
  foot: FootReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
