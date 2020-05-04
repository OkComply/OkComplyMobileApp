import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

/**
 * @author Ilias Delawar
 */
const rootReducer = combineReducers({
   users:  userReducer,
});

export default rootReducer;