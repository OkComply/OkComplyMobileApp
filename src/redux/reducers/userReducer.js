import {SET_USER} from '../types';
import {initialState} from '../store/initialState'

/**
 * @author Ilias Delawar
 */



const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
            return { ...state, user: action.payload };

		default:
			return state;
    }

};


export default userReducer
