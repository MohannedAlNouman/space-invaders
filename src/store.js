import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineEpics, createEpicMiddleware} from "redux-observable";

import ship, {shipEpic} from "./reducers/ship.js";

const epicMiddleware = createEpicMiddleware();

//combines all epics in 1
const rootEpic = combineEpics(shipEpic);

//combine all reducers in 1 object
const rootReducer = {
  ship
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware, ...getDefaultMiddleware()]
});

epicMiddleware.run(rootEpic);

export default store;
