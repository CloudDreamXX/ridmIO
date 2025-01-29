import { NavItem } from "shared/ui";

interface Nav {
  [key: string]: NavItem[];
}

export const nav: Nav = {
  Services: [
    {
      name: "Personal Finance",
      link: "/",
    },
    {
      name: "Business Platform",
      link: "/",
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
      link: "/",
    },
  ],
  Legal: [
    {
      name: "Licences",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Cookie Policy",
      link: "/",
    },
    {
      name: "Terms of Use",
      link: "/",
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
