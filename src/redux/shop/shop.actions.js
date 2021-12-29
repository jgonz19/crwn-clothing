import ShopActionTypes from "./shop.types";



export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,

});


export const fetchCollectionSuccess  = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE, 
    payload:errorMessage,
});

