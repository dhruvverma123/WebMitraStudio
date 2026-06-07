import { createContext, useState } from "react";
export const Context = createContext<any>(null);

export default function ContextApi({ children }: any) {
  let [form, setForm] = useState(false);
  let [isNavOpen, setIsNavOpen] = useState(false);

  let options = {
    form,
    setForm,
    isNavOpen,
    setIsNavOpen,
  };

  return <Context.Provider value={options}>{children}</Context.Provider>;
}
