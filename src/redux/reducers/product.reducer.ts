import { reducerType } from "../constants/reducer-type.constants";

interface Action {
    type: string;
    value: any;
}

class InitialState {
    productList = [];
    searchValue = "";
}

const initialState = new InitialState();

export default function productReducer(state = initialState, action: Action) {
    const { type, value } = action;
    const { SET_PRODUCT_LIST, SET_SEARCH_VALUE } = reducerType;

    switch (type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: [...value]
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: value
            }
        default: 
            return { ...state }
    };
}