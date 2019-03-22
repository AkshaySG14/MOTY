import {} from "../constants/ActionTypes"

import {CHANGE_IMAGE_SELECTED, ACCEPT_SHNU, DISPLAY_NICE} from "../constants/ActionTypes"

export const changeImageSelected = (picture_selected) => ({ type: CHANGE_IMAGE_SELECTED, payload: {picture_selected} });
export const acceptShnu = () => ({ type: ACCEPT_SHNU});
export const displayNice = () => ({ type: DISPLAY_NICE});