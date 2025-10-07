import { createSlice } from "@reduxjs/toolkit";
import common from "../utils/common";

export const I18nSlice = createSlice({
  name: "i18n",
  initialState : {value : common.GetLocal("lang")},
  reducers: {
    updateLang : (state, action) => {
      state.value = action.payload
    }
  },
});


export const {updateLang} = I18nSlice.actions;
export default I18nSlice.reducer;
