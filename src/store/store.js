import { compose, createStore, applyMiddleware } from "redux";
import {logger} from 'redux-logger';
import { rootReducer } from "./root-reducer";

//const middleWares = [logger]
//Custom logger

const middleWareLogger = (store) => (next) =>(action) =>{
    if(!action.type){
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);

    console.log('next state: ', store.getState());
}
//middlewares;little library helpers that run before the action hits the reducer 
const middleWares = [middleWareLogger]

const composedEnhancers =  compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
