import supp from "shared/assets/img/icon-support.svg";
import visa from "shared/assets/img/Visa.svg";
import master from "shared/assets/img/MasterCard.svg";

interface NavItem {
  name: string;
  link?: string;
  icon?: string;
}

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
      icon: supp,
    },
  ],
  About: [
    {
      name: "About us",
      link: "/",
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
  Company: [
    {
      name: "Ridm is Part of Climar Ltd. Company number: 1234567890 Streetname 123 Ireland",
      link: "/",
    },
    {
      name: "Visa",
      icon: visa,
    },
    {
      name: "MasterCard",
      icon: master,
    },
  ],
};