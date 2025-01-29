import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    console.log(hash, pathname, hash === "#form" && pathname === "/");
    if (hash === "#form" && pathname === "/") return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
};
