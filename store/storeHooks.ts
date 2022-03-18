import { useContext } from "react";
import { StoreContext } from "./Index";

// Custom Hooks
export const useStore = () => useContext(StoreContext);
