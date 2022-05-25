import { all,call,put,takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utilities";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.actiontypes";



export function* fetchCategoriesAsync(){
    //dispatch(fetchCategoriesStart());

    try{
        //Anywhere you have effect and wanna turn it into effect use (call)  and yield take place of await
        //const categoriesArray = await getCategoriesAndDocuments('categories');
        const categoriesArray =  yield call(getCategoriesAndDocuments,'categories');

        //in place of dispatch we use put
        //dispatch(fetchCategoriesSuccess(categoriesArray));
        yield put(fetchCategoriesSuccess(categoriesArray));

    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}


export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}


export function* categoriesSaga(){
    yield all([ call(onFetchCategories) ]);
}