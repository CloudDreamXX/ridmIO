import { useState, useEffect } from "react";
import { throttle } from "lodash";

export const useSectionTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return { theme, setTheme };
};
