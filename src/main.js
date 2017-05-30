import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';
var store = configureStore();
render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById('app'));
//# sourceMappingURL=main.js.map