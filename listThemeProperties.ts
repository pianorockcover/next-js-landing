import { ThemeManager, THEME_FILE } from "./app/ThemeManager";
import fs from "fs";

const theme = new ThemeManager();

const keyify = (obj: object, prefix = "") =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + "-")];
    }
    return [...res, prefix + el];
  }, []);

const customProperties = keyify(theme)
  .map((s) => `// $${s}: ;`)
  .join("\n");

const divider = `/* Overriding */`;

const themeFile = fs.readFileSync(THEME_FILE, "utf-8");
const mainProperties = !themeFile.includes(divider)
  ? themeFile
  : themeFile.split(divider)[0];

fs.writeFileSync(
  THEME_FILE,
  `${mainProperties}${divider}\n\n${customProperties}`
);

console.log("Theme was updated");
