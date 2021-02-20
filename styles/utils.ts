import { theme } from "./styled";

type Theme = typeof theme;
type ThemeKey = keyof typeof theme;
type KeysOfUnion<T> = T extends T ? keyof T : never;

export const themeProp = (
  prop: string,
  themeKey: ThemeKey,
  mapper: (token: string) => any
) => {
  return Object.values(theme[themeKey]).reduce(
    (acc, val) => {
      const token = val.token as KeysOfUnion<Theme[ThemeKey]>;
      acc[prop][token] = mapper(`$${token}`);
      return acc;
    },
    { [prop]: {} } as {
      [prop: string]: {
        [token in KeysOfUnion<Theme[ThemeKey]>]: any;
      };
    }
  );
};
