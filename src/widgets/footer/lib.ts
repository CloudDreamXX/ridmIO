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
      name: "Ridm is a platform providing virtual asset services operated by Digital Currency Services B.V. and Xypheris S.r.o. Digital Currency Services B.V. Company number 5855697 registered with the Dutch National Bank (DNB) Xypheris s.r.o. Company number 22400737 registered with the Financial Analytical Office of Czech Republic (FAÚ)",
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
