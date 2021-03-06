import {
    SET_USER,
    SET_TOKEN
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


export function setUserToken(token){
    return{
        type: SET_TOKEN,
        payload: token
    }
}
