import { createContext } from "react";

type NavbarContextType = {
    isDisplaySidebar: boolean;
    toggleSidebar: () => void;
};
  
const NavbarContext = createContext<NavbarContextType>({
    isDisplaySidebar: false,
    toggleSidebar: () => {},
});

export default NavbarContext;