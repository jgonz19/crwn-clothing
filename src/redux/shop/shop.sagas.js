import { takeLatest, call, all,  put } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

import {
    fetchCollectionSuccess,
    fetchCollectionFailure

} from "./shop.actions";

export function* fetchCollectionsAsync(){
    try{
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionFailure(error.message));
    }    
}   
//     collectionRef
//                 .get()
//                 .then(snapshot => {
//                     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
//                         dispatch(fetchCollectionSuccess(collectionsMap));
            
            
//             }).catch( error => dispatch(fetchCollectionFailure(error.message)));


export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync  
    );
}

export function* shopSagas(){
    yield (all[call(fetchCollectionsStart)])
}