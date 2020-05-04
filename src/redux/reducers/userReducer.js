import React, { Component } from 'react';
import {SET_USER} from '../types';

/**
 * @author Ilias Delawar
 */

const initialState = {
	user: null,
	accesstoken: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
            return { ...state, user: action.payload };

		default:
			return state;
    }

};


export default userReducer
