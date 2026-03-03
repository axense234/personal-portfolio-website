"use client";
// React
import { createContext, useContext, useState } from "react";
// Store
import { createGeneralStore } from "./store";
// Types
import { GeneralStore } from "@/core/types";
// Zustand
import { useStore } from "zustand";
import { defaultInitState } from "./init";

export type GeneralStoreApi = ReturnType<typeof createGeneralStore>;

export const GeneralStoreContext = createContext<GeneralStoreApi | undefined>(
  undefined,
);

export const GeneralStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [store] = useState(() => createGeneralStore(defaultInitState));

  return (
    <GeneralStoreContext.Provider value={store}>
      {children}
    </GeneralStoreContext.Provider>
  );
};

export const useGeneralStore = <T,>(
  selector: (store: GeneralStore) => T,
): T => {
  const generalStoreContext = useContext(GeneralStoreContext);

  if (!generalStoreContext) {
    throw new Error(`useGeneralStore must be used within GeneralStoreProvider`);
  }

  return useStore(generalStoreContext, selector);
};
