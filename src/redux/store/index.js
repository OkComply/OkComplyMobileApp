import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import collapsibleReducer from '../reducers/collapsibleReducer';
import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from '../middleware/logger'

/**
 * @author Ilias Delawar
 */
const rootReducer = combineReducers({
   users:  userReducer,
   collapsible: collapsibleReducer,
});



const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))


export default store;