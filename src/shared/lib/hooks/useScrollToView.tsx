import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToView = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const anchor = document.getElementById(hash.slice(1));
      anchor?.scrollIntoView();
      return;
    }
  }, [pathname, hash]);

  useEffect(() => {
    const isIOSSafari =
      /iPhone|iPod|iPad/i.test(navigator.userAgent) &&
      /WebKit/i.test(navigator.userAgent) &&
      !/(CriOS|FxiOS|OPiOS|mercury)/i.test(navigator.userAgent);

    if (isIOSSafari) {
      document.documentElement.style.setProperty("scroll-behavior", "auto");

      const smoothScroll = (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", smoothScroll);
      });

      return () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.removeEventListener("click", smoothScroll);
        });
      };
    }
  }, []);
};
