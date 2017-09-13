import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './rootReducer';
import App from './modules/app';

import registerServiceWorker from './registerServiceWorker';
import setRootFontSize from './plugs/setRootFontSize.js';

let store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
setRootFontSize();

