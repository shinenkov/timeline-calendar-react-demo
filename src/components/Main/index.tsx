import './main.css';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useMemo, useState } from 'react';
import {
  componentsTheme,
  typographyTheme,
  ColorModeContext,
  Theme,
} from '../../types/types';
import { useLocalStorage } from 'usehooks-ts';
import { Home } from '../../pages/Home';
import { Routes, Route, NavLink } from 'react-router';

export default function Main() {
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [storageTheme, setStorageTheme] = useLocalStorage<Theme>(
    'theme',
    isSystemDark ? 'dark' : 'light'
  );
  const [mode, setMode] = useState<'light' | 'dark'>(
    (storageTheme as 'light' | 'dark' | undefined) !== undefined
      ? (storageTheme as 'light' | 'dark')
      : isSystemDark
        ? 'dark'
        : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    setStorageTheme(mode);
  }, [mode, setStorageTheme]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setStorageTheme(storageTheme === 'light' ? 'dark' : 'light');
      },
    }),
    [setStorageTheme, storageTheme]
  );

  const theme = useMemo(
    () =>
      createTheme(
        {
          typography: typographyTheme,
          palette: {
            mode,
          },
          components: componentsTheme,
        },
        ruRU
      ),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ width: '100%' }}>
          <div style={{ display: 'none' }}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route index element={<Home colorMode={colorMode} />} />
          </Routes>
          <div style={{ display: 'none' }}></div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
