import { createStore } from 'redux';
import rootReducer from './reducer'; // Adjust the path as needed

const store = createStore(rootReducer);

export default store;