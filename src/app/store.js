import { configureStore } from "@reduxjs/toolkit";
import pictureSliderReducer from "../features/pictureSlider/pictureSliderSlice";

export const store = configureStore({
  reducer: {
    pictureSlider: pictureSliderReducer
  }
});
