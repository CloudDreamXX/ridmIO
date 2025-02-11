import { useState, useEffect } from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router";

export const useSectionTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = Array.from(document.querySelectorAll("[data-section]"));

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          const sectionTheme = (section as HTMLElement).dataset.section as
            | "light"
            | "dark";
          setTheme(sectionTheme);
          break;
        }
      }
    }, 100);

    const handleOnLoad = () => {
      const section = document.querySelectorAll("[data-section]")?.[0];
      console.log(section);
      if (section) {
        const sectionTheme = (section as HTMLElement).dataset.section as
          | "light"
          | "dark";
        setTheme(sectionTheme);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleOnLoad);
    handleScroll();
    handleOnLoad();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleOnLoad);
      handleScroll.cancel();
    };
  }, [pathname]);

  return { theme, setTheme };
};
