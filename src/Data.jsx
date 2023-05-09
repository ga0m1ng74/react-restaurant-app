import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from './assets/recipe1.jpeg'
import recipe2 from "./assets/recipe2.jpeg";
import recipe3 from "./assets/recipe3.jpeg";
import recipe4 from "./assets/recipe4.jpeg";
import recipe5 from "./assets/recipe5.jpeg";
import recipe6 from "./assets/recipe6.jpeg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Recipe Name",
    price: "$20",
  },
  {
    id: 2,
    image: recipe2,
    name: "Recipe Name",
    price: "$13",
  },
  {
    id: 3,
    image: recipe3,
    name: "Recipe Name",
    price: "$17",
  },
  {
    id: 4,
    image: recipe4,
    name: "Recipe Name",
    price: "$22",
  },
  {
    id: 5,
    image: recipe5,
    name: "Recipe Name",
    price: "$14",
  },
  {
    id: 6,
    image: recipe6,
    name: "Recipe Name",
    price: "$20",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "0401000111",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "admin@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "1 Pitt St,Sydney,NSW 2000",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];