import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import authReducer from "./authReducer";
import {movieReducer} from "./movieReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
