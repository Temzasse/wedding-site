import { theme } from "./styled";

type Theme = typeof theme;
type ThemeKey = keyof typeof theme;

export function themeProp<P extends string, T extends ThemeKey>(
  prop: P,
  themeKey: T,
  getStyles: (token: string) => any
) {
  return Object.values(theme[themeKey]).reduce(
    (acc, val) => {
      const token = val.token as keyof Theme[T];
      acc[prop][token] = getStyles(`$${token}`);
      return acc;
    },
    { [prop]: {} } as {
      [prop in P]: { [token in keyof Theme[T]]: any }; // TODO: fix any
    }
  );
}
