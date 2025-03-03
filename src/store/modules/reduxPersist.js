import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'MOVIE-APP',
            storage,
            whitelist: [''],
        },
        reducers,
    );

    return persistedReducers;
};
