import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const anchor = document.getElementById(hash.slice(1));
      anchor?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);
};
