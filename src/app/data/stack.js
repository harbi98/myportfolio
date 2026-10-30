import java from "../images/java.webp";
import javascript from "../images/js.png";
import react from "../images/reactjs.webp";
import nextjs from "../images/nextjs.png";
import tailwind from "../images/tailwind.png";
import php from "../images/php.png";
import laravel from "../images/laravel.png";
import mysql from "../images/mysql.png";
import vscode from "../images/vs.png";

// Grouped tech stack. Add or move items freely; `logo` is optional.
const stack = [
  {
    group: "Frontend",
    items: [
      { name: "JavaScript", logo: javascript },
      { name: "Next.js", logo: nextjs },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Nuxt / Vue" },
    ],
  },
  {
    group: "CMS",
    items: [
      { name: "WordPress" },
      { name: "ACF" },
      { name: "Twig" },
      { name: "Webflow" },
    ],
  },
  {
    group: "Mobile",
    items: [{ name: "React Native", logo: react }],
  },
  {
    group: "Backend",
    items: [
      { name: "PHP", logo: php },
      { name: "Laravel", logo: laravel },
      { name: "Java", logo: java },
    ],
  },
  {
    group: "Data & Tools",
    items: [
      { name: "MySQL", logo: mysql },
      { name: "VS Code", logo: vscode },
      { name: "Zapier" },
    ],
  },
];

export default stack;
