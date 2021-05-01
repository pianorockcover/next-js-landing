import Color from "color";
import { set } from "lodash";
import themeConfig from "./data/theme";
import Info from "./data/info";

class Theme {
  primary = "#2196F3";
  secondary = "#6c757d";
  success = "#41ec86";
  info = "#0dcaf0";
  warning = "#ffd21e";
  danger = "#fa7496";
  light = "#f8f9fa";
  dark = "#212529";
  text = "#444444";
  white = "#ffffff";

  navbar = {
    borderBottomColor: Color(this.white).alpha(0.5).rgb(),
    scrolledBoxShadow: this.text,
    scrolledBg: Color(this.primary).darken(0.2).hex(),
    linkBorder: this.warning,
    linkColor: this.white,
    socialLink: {
      bg: this.warning,
      color: this.text,
    },
  };

  header = {
    bg: {
      gradientStyle: "linear-gradient",
      direction: "-45deg",
      from: Color(this.primary).lighten(0.5).hex(),
      to: Color(this.primary).darken(0.2).hex(),
    },
  };

  form = {
    checkbox: {
      filled: this.primary,
    },
  };

  constructor(config?: Record<string, string | number>) {
    if (config) {
      Object.keys(config).forEach((field) => set(this, field, config[field]));
    }
  }
}

export const theme = new Theme(themeConfig);

export const content = new Info();
