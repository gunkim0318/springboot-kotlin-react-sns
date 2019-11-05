import { createBrowserHistory } from "history";
// import * as localforage from "localforage";
import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";

// const persistConfig: PersistConfig<any> = {
// 	key: "root",
// 	version: 1,
// 	storage: localforage,
// 	blacklist: [],
// };

// const logger = (createLogger as any)();
const history = createBrowserHistory();

const dev = process.env.NODE_ENV === "development";

// let middleware = dev ? applyMiddleware(logger, thunk) : applyMiddleware(thunk);

if (dev) {
    // middleware = composeWithDevTools(middleware);
}

//Action
const INCREMENT = "INCREMENT";

// function increase(diff: any) {
//     return {
//         type: INCREMENT,
//         addBy: diff
//     };
// }

//reducer
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}

export default () => {
    const store = createStore(counterReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};

export { history };
