import { createStore } from 'redux';
import { reducer } from './reducer';
var initialState = {
    todos: [{
            id: 0,
            text: 'Demo todo',
            completed: false,
        }]
};
export var configureStore = function (state) {
    if (state === void 0) { state = initialState; }
    return createStore(reducer, state);
};
//# sourceMappingURL=store.js.map