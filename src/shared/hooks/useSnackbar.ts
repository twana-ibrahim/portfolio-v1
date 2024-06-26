"use client";

import { useSnackbar as useDefaultSnackbar } from "notistack";
import { useCallback } from "react";

const useSnackbars = () => {
  const { enqueueSnackbar } = useDefaultSnackbar();

  const showSnackbar = useCallback(
    (message: string, variant?: "success" | "error") =>
      enqueueSnackbar(message, { variant: variant ?? "success" }),
    [enqueueSnackbar]
  );

  return showSnackbar;
};

export default useSnackbars;
