"use client";

import Header from "@/components/Header";
import store from "@/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      {children}
    </Provider>
  );
};

export default ReduxProvider;
