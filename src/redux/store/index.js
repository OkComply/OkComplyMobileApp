import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import collapsibleReducer from '../reducers/collapsibleReducer';

/**
 * @author Ilias Delawar
 */
const rootReducer = combineReducers({
   users:  userReducer,
   collapsible: collapsibleReducer,
});

export default rootReducer;