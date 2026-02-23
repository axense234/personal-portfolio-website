// Types
import { GeneralState } from "@/core/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toggleColorTheme = (set: any) =>
  set((state: GeneralState) => ({
    colorTheme: state.colorTheme === "dark" ? "light" : "dark",
  }));
