// Types
import { GeneralStore, GeneralState } from "@/core/types";

export type SetGeneralStoreFunctionType = {
  (
    partial:
      | GeneralStore
      | Partial<GeneralStore>
      | ((state: GeneralStore) => GeneralStore | Partial<GeneralStore>),
    replace?: false,
  ): void;
  (
    state: GeneralStore | ((state: GeneralStore) => GeneralStore),
    replace: true,
  ): void;
  (arg0: (state: GeneralState) => GeneralState): any;
};
