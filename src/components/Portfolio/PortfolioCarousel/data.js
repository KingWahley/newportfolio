import sample1 from "../../../assets/images/Owambe.webp";
import sample2 from "../../../assets/images/food.png";
import sample3 from "../../../assets/images/caffeine.png";
import sample4 from "../../../assets/images/summer.png";
import sample5 from "../../../assets/images/caffeine.png";
import sample6 from "../../../assets/images/food.png";

import { Link } from "react-router-dom";

export const projects = [
  {
    id: 2,
    img: sample2,
    title: "FooDoo",
    description:
      "Foodle is an AI-powered food ordering platform that redefines how users interact with restaurants. Instead of navigating complex menus, users simply chat with an intelligent AI assistant to explore the menu, get recommendations, add items to their cart, and place orders seamlessly.",
    link: "https://foodoo-ochre.vercel.app/",
    stack: ["nextjs", "javascript", "tailwind", "react","Groq"],
  },

  {
    id: 3,
    img: sample3,
    title: "Coffee-Caf",
    description: "yeah...still on that shit",
    link: "https://caffeineonlinestore.vercel.app/",
    stack: ["nextjs", "javascript", "tailwind", "react"],
  },
  {
    id: 4,
    img: sample4,
    title: "Summer-House",
    description: "loadng",
    link: "https://summer-house-bay.vercel.app/",
    stack: ["nextjs", "javascript", "tailwind", "react"],
  },
  {
    id: 1,
    img: sample1,
    title: "Owambe",
    description:
      "Owambe is a vibrant platform that simplifies event discovery and organization.",
    link: "https://owambe-kingwahleys-projects.vercel.app/",
    stack: ["nextjs", "javascript", "tailwind", "react"],
  },
];
