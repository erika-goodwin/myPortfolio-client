import { createStore } from "redux";
import reducer from './reducer'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(reducer, devTools);
const store = createStore(reducer);
export default store;