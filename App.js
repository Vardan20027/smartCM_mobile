import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main/Main';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
