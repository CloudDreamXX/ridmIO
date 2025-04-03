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
      name: "Terms of Use",
      link: "/terms-use",
    },
    {
      name: "Cookie Policy",
      link: "/cookie-policy",
    },
  ],
  "Company info": [
    {
      name: "Ridmio Limited Ireland corp. reg: 758159. Ridm is a platform providing virtual asset services licensed in the Netherlands and Czech Republic.",
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
