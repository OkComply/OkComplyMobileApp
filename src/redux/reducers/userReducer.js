import { SET_USER, SET_TOKEN , SET_LOGGEDIN} from '../types';
import { initialState } from '../store/initialState';

/**
 * @author Ilias Delawar
 */

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };

		case SET_TOKEN:
			return{...state, token: action.payload}

		case SET_LOGGEDIN:
			return{...state, isLoggedIn: action.payload}

		default:
			return state;
	}
};

export default userReducer;
