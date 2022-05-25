import { compose, createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger';
import { rootReducer } from "./root-reducer";

import {persistStore, persistReducer }from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

//Custom middleWare
// import { middleWareLogger } from "../utilities/middleware/logger";

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV != 'production' && logger, sagaMiddleWare].filter(Boolean);


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}



const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancer = (process.env.NODE_ENV != 'production' &&
                        window &&
                        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers =  composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);