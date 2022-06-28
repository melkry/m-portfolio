import { createSlice } from "@reduxjs/toolkit";
import { sliderPictures } from "./sliderPictures";

const lastId = sliderPictures.length - 1;

export const pictureSliderSlice = createSlice({
  name: "pictureSlider",
  initialState: {
    currentPicture: sliderPictures[0]
  },
  reducers: {
    goForward: (state) => {
      const currentId = state.currentPicture.id;
      if (currentId === lastId) {
        state.currentPicture = sliderPictures[0];
      } else {
        state.currentPicture = sliderPictures[currentId + 1];
      }
    },
    goBackward: (state) => {
      const currentId = state.currentPicture.id;
      if (currentId === 0) {
        state.currentPicture = sliderPictures[lastId];
      } else {
        state.currentPicture = sliderPictures[currentId - 1];
      }
    }
  }
});

export const nextPicture = pictureSliderSlice.actions.goForward;
export const prevPicture = pictureSliderSlice.actions.goBackward;
export const selectCurrentPicture = (state) =>
  state.pictureSlider.currentPicture;
export default pictureSliderSlice.reducer;
