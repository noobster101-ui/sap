import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Courses",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "SAP ECC",
        path: "/sap-ecc",
        newTab: false,
      },
      {
        id: 32,
        title: "SAP S/4 HANA",
        path: "/sap-s4hana",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
