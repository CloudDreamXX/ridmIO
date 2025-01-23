import { useLocation } from "react-router";

export const useDarkBg = () => {
  const location = useLocation();
  return location.pathname === "/";
};
