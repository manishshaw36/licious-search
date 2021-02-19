import { reducerType } from "../constants/reducer-type.constants";

export const setSearchValue = (value: string) => {
    return {
        type: reducerType.SET_SEARCH_VALUE,
        value
    };
};

export const setProductList = (data: any) => {
    return {
        type: reducerType.SET_PRODUCT_LIST,
        value: data
    };
};

export const getProductList = () => (dispatch: any) => {
    fetch('https://api.npoint.io/559e22a5f259679392af')
        .then(response => response.json())
        .then(response => {
            dispatch(setProductList(response.searchEntities));
        })
        .catch(error => {
            console.log(error)
        });
};