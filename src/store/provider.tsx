"use client";

import React from "react";
import { Provider } from "react-redux";
import Store from "./index";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}
