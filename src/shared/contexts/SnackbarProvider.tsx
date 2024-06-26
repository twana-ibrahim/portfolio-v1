"use client";

import { ReactNode } from "react";
import { SnackbarProvider as DefaultProvider } from "notistack";

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DefaultProvider
      autoHideDuration={3000}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
    >
      {children}
    </DefaultProvider>
  );
};
export default SnackbarProvider;
