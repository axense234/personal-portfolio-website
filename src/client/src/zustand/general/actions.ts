// Types
import { SetGeneralStoreFunctionType } from "@/core/interfaces";
import { GeneralState } from "@/core/types";

export const toggleColorTheme = (set: SetGeneralStoreFunctionType) =>
  set((state: GeneralState) => ({
    colorTheme: state?.colorTheme === "dark" ? "light" : "dark",
  }));
