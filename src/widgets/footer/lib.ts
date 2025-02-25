import { NavItem } from "shared/ui";

interface Nav {
  [key: string]: NavItem[];
}

export const nav: Nav = {
  Services: [
    {
      name: "Personal Finance",
      link: "/#individuals",
    },
    {
      name: "Business Platform",
      link: "/#business",
    },
    {
      name: "Support",
      link: "https://support.ridm.io/",
      target: "_blank",
    },
  ],
  "About us": [
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/#form",
    },
  ],
  Legal: [
    {
      name: "Licenses",
      link: "/licenses",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Terms and Use",
      link: "/terms-use",
    },
  ],
  "Company info": [
    {
      name: "Ridm is a licenced virtual asset service provider and is regulated by the relevant authorities in the Netherlands and the Czech Republic. Ridm.io website is operated by Digital Currency Services B.V. and Xypheris s.r.o.",
      link: "/",
    },
    {
      name: "Visa",
    },
    {
      name: "MasterCard",
    },
  ],
};
