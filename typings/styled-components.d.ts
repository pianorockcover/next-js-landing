import "styled-components";
import { ThemeManager } from "../app/ThemeManager";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeManager {}
}
