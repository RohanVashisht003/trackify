import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import {BrowserRouter as Router} from 'react-router-dom';

// created store and passed reducer
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // providing store to app
  <Provider store={store}>
    <Router basename='/trackify'>
     <App />
    </Router>
  </Provider>
 
);
