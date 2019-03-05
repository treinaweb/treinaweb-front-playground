import { DataStructureService } from '../services/DataStructureService';

export const STYLE_LIST = 'TODO_LIST';
export const STYLE_LIST_RESPONSE = 'TODO_LIST_RESPONSE';
export const STYLE_UPDATE = 'TODO_UPDATE';

export const list = (dispatch) => {
    return async (dispatch) => {
        const response = await DataStructureService.get('???');
        dispatch(listResponse(response));
    }
}

export const listResponse = (styleList) => {
    return {
        type: STYLE_LIST_RESPONSE,
        styleList
    }
}

export const cssUpdate = (selector, prop) => {
    return {
        type: STYLE_UPDATE,
        selector,
        prop
    }
}