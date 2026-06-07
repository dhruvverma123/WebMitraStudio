import { createContext, useState } from "react";
export const Context = createContext();

export default function ContextApi({ children }) {
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
