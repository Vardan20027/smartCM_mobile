import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import reducer from './reducers/rootReducer';
import {createLogicMiddleware} from 'redux-logic';
import {logics} from './logic/index';
const logicMiddleware = createLogicMiddleware(logics);
const middleware = applyMiddleware(logicMiddleware);
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

export {store, persistor};
