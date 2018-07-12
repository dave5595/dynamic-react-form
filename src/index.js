import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './styles/index.css';
import "semantic-ui-css/semantic.min.css";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/root.reducer'; //slight change from './reducers

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
