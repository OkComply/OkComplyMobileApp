import { IS_ACTIVE } from '../types';
import { IS_ACTIVE2 } from '../types';
import { IS_ACTIVE3 } from '../types';
import { initialState } from '../store/initialState';

/** 
 * @author Ilias Delawar
*/


const collapsibleReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_ACTIVE:

			return { ...state, expanded: action.payload, expanded2:false, expanded3:false };

		case IS_ACTIVE2:

			return { ...state, expanded2: action.payload , expanded:false, expanded3:false};

		case IS_ACTIVE3:
			return { ...state, expanded3: action.payload, expanded2:false, expanded:false };

		default:
			return state;
	}
};

export default collapsibleReducer;
