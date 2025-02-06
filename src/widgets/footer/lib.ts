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
  ],
  About: [
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
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Terms of Service",
      link: "/terms-use",
    },
  ],
  "Company info": [
    {
      name: "Ridm is a brand owned and operated by Xypheris s.r.o. Czech Republic Company Number:22400737 Kurzova 2222/16, 155 00, Prague Czech Republic Virtual Asset Service Provider registered with the Financial Analytical Office of Czech Republic (FAU)",
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
