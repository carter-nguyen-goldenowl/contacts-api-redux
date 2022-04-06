import { userReducer } from "./user";
import { contactsReducer } from "./contacts";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducers = combineReducers({
    user: userReducer,
    contacts: contactsReducer,
});

export default rootReducers;
