import { doRequest } from "../../helpers/Request"
import { SHOUTCAST_URL } from "../../Constants"
import AppState from "../AppState";

export default class Radio {
  static async search(query) {
    AppState.set({ radio: { loading: true } });
    doRequest(`${SHOUTCAST_URL}&search=${query}`).then((result) => {
        AppState.set({
          radio: {
            loading: false,
            stations: result
          }
        });
    });
  }

  static listGenre(genre) {

  }
}