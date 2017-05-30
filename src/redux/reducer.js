var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export var reducer = function (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            var todos = [
                {
                    text: action.text,
                    completed: false,
                    id: getId(state)
                }
            ].concat(state.todos);
            return __assign({}, state, { todos: todos });
        default:
            return state;
    }
};
function getId(state) {
    return state.todos.reduce(function (maxId, todo) {
        return Math.max(todo.id, maxId);
    }, -1) + 1;
}
//# sourceMappingURL=reducer.js.map