import {createSlice} from "@reduxjs/toolkit";
// import {tap, throttleTime, map, switchMap} from "rxjs/operators";
import {map} from "rxjs/operators";

export const shipSlice = createSlice({
  name: "ship",
  initialState: {
    x: 360,
    y: 650,
    shooting: false
  },
  reducers: {
    moveLeft: state => (state.x -= 5),
    moveRight: state => (state.x += 5),
    moveUp: state => (state.y -= 5),
    moveDown: state => (state.y += 5),
    shoot: state => (state.shooting = true),
    stopShooting: state => (state.shooting = false)
  }
});

export const {moveLeft, moveRight, moveUp, moveDown, shoot, stopShooting} = shipSlice.actions;

const selectX = state => state.ship.x;
const selectY = state => state.ship.y;
const selectShooting = state => state.ship.shooting;

export {selectX, selectY, selectShooting};

export const shipEpic = action$ => {
  return action$.pipe(
    map(a => {
      a.type = "obtuse";
    })
  );
};

export default shipSlice.reducer;
