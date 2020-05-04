import {
    SET_USER,
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