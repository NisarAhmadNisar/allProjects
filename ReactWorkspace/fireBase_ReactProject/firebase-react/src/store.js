import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase";
//using firestore becoz we selected firestore in google.firebase as a db
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";

const firebaseConfig = {
  apiKey: "AIzaSyDqTinXwn_-6k1DNSlmPVuUgpEThLT1mNk",
  authDomain: "reactproject-149f5.firebaseapp.com",
  databaseURL: "https://reactproject-149f5.firebaseio.com",
  projectId: "reactproject-149f5",
  storageBucket: "reactproject-149f5.appspot.com",
  messagingSenderId: "498249964294",
  appId: "1:498249964294:web:0b967bf499f360eec01c87"
};
//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

//create initial state
const initialState = {};

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true
});

// const store = function(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(
//       /* logger must be the last middleware in chain to log actions */
//       applyMiddleware(thunk, logger)
//     )
//   );
// };

//create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(
    /* logger must be the last middleware in chain to log actions */
    applyMiddleware(thunk, logger)
  )
);

export default store;
