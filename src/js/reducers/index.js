import React from "react";

import {ACCEPT_SHNU, CHANGE_IMAGE_SELECTED, DISPLAY_NICE} from "../constants/ActionTypes"

const initialState = {
    picture_selected: new Array(16).fill(false),
    accept_shnu: false,
    display_nice: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IMAGE_SELECTED:
            return {
                ...state,
                picture_selected: action.payload.picture_selected
            };
        case ACCEPT_SHNU:
            return {
                ...state,
                accept_shnu: true
            };
        case DISPLAY_NICE:
            return {
                ...state,
                display_nice: true
            };
        default:
            return state;
    }
};

export default rootReducer;