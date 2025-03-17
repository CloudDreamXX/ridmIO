import { useState, useEffect } from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router";

type ThemeComponentType = "header" | "cookie";

export const useSectionTheme = (
  componentType: ThemeComponentType = "header"
) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = Array.from(document.querySelectorAll("[data-section]"));

      if (componentType === "cookie") {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            const sectionTheme = (section as HTMLElement).dataset.section as
              | "light"
              | "dark";
            setTheme(sectionTheme);
            break;
          }
        }
      } else {
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
      }
    }, 100);

    const handleOnLoad = () => {
      if (componentType === "cookie") {
        const sections = Array.from(
          document.querySelectorAll("[data-section]")
        );
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          const sectionTheme = (lastSection as HTMLElement).dataset.section as
            | "light"
            | "dark";
          setTheme(sectionTheme);
        }
      } else {
        const section = document.querySelectorAll("[data-section]")?.[0];
        if (section) {
          const sectionTheme = (section as HTMLElement).dataset.section as
            | "light"
            | "dark";
          setTheme(sectionTheme);
        }
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
  }, [pathname, componentType]);

  return { theme, setTheme };
};
