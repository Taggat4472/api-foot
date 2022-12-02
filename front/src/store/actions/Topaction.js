/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_TOP_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

export const getTopscorerLocal = () => {
    return (dispatch) => {
      return axios.get("http://localhost:3030/topscorer", {
        headers: {
          "X-security-header": "krashtest"
        }
      })
        .then((res) => {
          console.log('res api foot', res)
          dispatch({ type: GET_TOP_DATA, payload: res.data.response})
        })
        .catch(err => console.log(err));
    }
  };
  