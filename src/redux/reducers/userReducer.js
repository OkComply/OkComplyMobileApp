import { SET_USER, SET_TOKEN } from '../types';
import { initialState } from '../store/initialState';

/**
 * @author Ilias Delawar
 */

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };

		case SET_TOKEN:
			console.log(action.payload)
			return{...state, token: action.payload}

		default:
			return state;
	}
};

export default userReducer;
