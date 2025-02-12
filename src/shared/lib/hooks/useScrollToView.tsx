import { useEffect } from "react";
import { useLocation } from "react-router";

const smoothScroll = (element: HTMLElement) => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const useScrollToView = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const anchor = document.getElementById(hash.slice(1));

      if (anchor) {
        const isIOSSafari =
          /iPhone|iPod|iPad/i.test(navigator.userAgent) &&
          /WebKit/i.test(navigator.userAgent) &&
          !/(CriOS|FxiOS|OPiOS|mercury)/i.test(navigator.userAgent);

        if (isIOSSafari) {
          smoothScroll(anchor);
        } else {
          anchor.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
};
