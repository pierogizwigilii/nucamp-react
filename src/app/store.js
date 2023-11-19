import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
    reducer: { //configuration object
        campsites: campsitesReducer, //set up slice of global state that is named campsites
        comments: commentsReducer, //set up slice of global state that is named comments
        partners: partnersReducer, //set up slice of global state that is named partners
        promotions: promotionsReducer, //set up slice of global state that is named promotions
        user: userReducer //set up slice of global state that is named user
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
}); //all slices united