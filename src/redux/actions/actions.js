import {
    SET_USER,
    SET_TOKEN,
    SET_LOGGEDIN
} from '../types';



/**
 * @author Ilias Delawar
 */

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function setLoggedIn(loggedIn){
    return {
        type: SET_LOGGEDIN,
        payload: loggedIn
    }
}


export function setUserToken(token){
    return{
        type: SET_TOKEN,
        payload: token
    }
}
