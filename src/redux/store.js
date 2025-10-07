import { configureStore } from "@reduxjs/toolkit";
import i18nRedux from "./I18nRedux";
import NotificationRedux from "./NotificationRedux";

const store = configureStore({
  reducer: {
    lang: i18nRedux,
    notification : NotificationRedux
  },
});

export default store;