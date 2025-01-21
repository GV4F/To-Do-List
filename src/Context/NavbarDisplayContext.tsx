import React, { createContext, SetStateAction, useState } from "react"


interface NavbarDisplayContextInterface {
  active: boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>
}

export const NavbarDisplayContext = createContext<NavbarDisplayContextInterface>({
  active: false,
  setActive: ()=> {},
});

function NavbarDisplayContextProvider({ children }: { children: React.ReactNode}) {

  const [active, setActive] = useState<boolean>(false);

  return (
    <NavbarDisplayContext.Provider value={{ active, setActive }}>{ children }</NavbarDisplayContext.Provider>
  )
}

export default NavbarDisplayContextProvider;