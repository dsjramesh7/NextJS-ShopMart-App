"use client";

import Header from "@/components/Header";
import store from "@/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import loading from "@/app/loading";

const ReduxProvider = ({ children, getSession }) => {
  return (
    <Provider store={store}>
      <Header getSession={getSession} />
      <Suspense fallback={<loading />}>{children}</Suspense>
    </Provider>
  );
};

export default ReduxProvider;
