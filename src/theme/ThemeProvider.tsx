import React, {ReactNode} from 'react';

import {lightTheme, darkTheme} from './themes';

type Theme = typeof lightTheme | typeof darkTheme;

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  toggleTheme: () => {},
});

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(lightTheme);

  const toggleTheme = React.useCallback(() => {
    setTheme(data => (data === lightTheme ? darkTheme : lightTheme));
  }, []);

  const themeContextValue = React.useMemo(
    () => ({theme, toggleTheme}),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
