import { createSlice } from "@reduxjs/toolkit";

export const NotificationRedux = createSlice({
  name: "Notification",
  initialState : {
    count : 1,
    type : 0,
    content: "",
    second: 0,
},
  reducers: {
    addNotification : (state, action) => {
        state.count = state.count+=1;
        state.type = action.payload.type;
        state.second = action.payload.second;
        state.content = action.payload.content;
    },
  },
});


export const { addNotification } = NotificationRedux.actions;
export default NotificationRedux.reducer;
