import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';

import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';


//import './style/style.css';
import './App.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';




const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    parcelCanUpdate: true
  });
  
  //export const bootstrap = [reactLifecycles.bootstrap];
  
  export async function mount(props) {
      return reactLifecycles.mount(props);
  }
  
  export const unmount = [reactLifecycles.unmount];
  
  export const update = [reactLifecycles.update];


const configureStore = initialState => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};

const store = configureStore();



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
