import {createSlice} from "@reduxjs/toolkit";
// import {tap, throttleTime, map, switchMap} from "rxjs/operators";

export const shipSlice = createSlice({
  name: "ship",
  initialState: {
    x: 0,
    y: 0
  },
  reducers: {
    throttleDown: state => {
      if (state.throttlePercent <= 0) {
        state.throttlePercent = 0;
      } else {
        state.throttlePercent -= 3;
      }
    }
  }
});

export const {throttleDown} = shipSlice.actions;

const selectX = state => state.helicopter.x;
const selectY = state => state.helicopter.y;

export {selectX, selectY};

export const shipEpic = action$ => {
  return action$.pipe();
};

export default shipSlice.reducer;
