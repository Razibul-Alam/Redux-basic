
import { createStore, combineReducers } from 'redux';
import { TeamReducer } from './AllReducer/TeamReducer';

const combinedReducer=combineReducers({
    teams:TeamReducer
})
export const store=createStore(
    
   combinedReducer
)