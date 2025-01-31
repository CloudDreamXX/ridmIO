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
      link: "/",
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
      name: "Licences",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Cookie Policy",
      link: "/",
    },
    {
      name: "Terms of Use",
      link: "/terms-use",
    },
  ],
  "Company info": [
    {
      name: "Ridm is a trademark of Climar Limited Company No. 758159 Ireland",
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
