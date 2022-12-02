/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_FOOT_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get Foot to api rapidapi
/*export const getFoot = () => {
  return (dispatch) => {
    return axios.get("https://api-football-v1.p.rapidapi.com/v3/leagues", {
      headers: {
        "X-RapidAPI-Key": "f7065e94d7mshc5f447a939a46e0p125858jsn2d82e5b4afb6",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    })
      .then((res) => {
        console.log('res api foot', res)
        dispatch({ type: GET_FOOT_DATA, payload: res.data.response})
      })
      .catch(err => console.log(err));
  }
}; */

// Get Foot to api nodejs
export const getFootLocal = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3030/leagues", {
      headers: {
        "X-security-header": "krashtest"
      }
    })
      .then((res) => {
        console.log('res api foot', res)
        dispatch({ type: GET_FOOT_DATA, payload: res.data.response})
      })
      .catch(err => console.log(err));
  }
};


