"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type MegaMenuContextValue = {
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
};

const MegaMenuContext = createContext<MegaMenuContextValue | null>(null);

export function MegaMenuProvider({ children }: { children: ReactNode }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  return (
    <MegaMenuContext.Provider value={{ openKey, setOpenKey }}>
      {children}
    </MegaMenuContext.Provider>
  );
}

export function useMegaMenu(key: string) {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenu must be used within a MegaMenuProvider");
  }
  const { setOpenKey } = context;
  const open = context.openKey === key;
  const setOpen = useCallback(
    (value: boolean) => setOpenKey(value ? key : null),
    [key, setOpenKey],
  );
  return { open, setOpen };
}
