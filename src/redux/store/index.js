import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import collapsibleReducer from '../reducers/collapsibleReducer';
import { createStore } from 'redux'

/**
 * @author Ilias Delawar
 */
const rootReducer = combineReducers({
   users:  userReducer,
   collapsible: collapsibleReducer,
});


const store = createStore(rootReducer)


export default store;