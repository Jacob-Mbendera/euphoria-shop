import { compose, createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger';
import { rootReducer } from "./root-reducer";


//middlewares;little library helpers that run before the action hits the reducer 
const middleWares = [logger]

const composedEnhancers =  compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
