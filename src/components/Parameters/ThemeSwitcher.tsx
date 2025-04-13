import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Message from '../Message/index.tsx';
import { useLocalStorage } from 'usehooks-ts';

type ThemeSwitcherProps = {
  colorMode: { toggleColorMode: () => void };
};

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const [storageTheme, setStorageTheme] = useLocalStorage('theme', 'dark');
  const [, , removeColors] = useLocalStorage<null>('userColors', null);
  const [openMessage, setOpenMessage] = useState<boolean>(false);

  const handleSwitchTheme = () => {
    const nowTheme = storageTheme === 'dark' ? 'light' : 'dark';
    setStorageTheme(nowTheme);
    props.colorMode.toggleColorMode();
    removeColors();
    setOpenMessage(true);
  };

  return (
    <>
      <Tooltip placement={'top'} title={'Сменить тему'}>
        <IconButton onClick={() => handleSwitchTheme()}>
          {storageTheme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
      <Message
        title={'Настройки темы сохранены: '}
        message={`${storageTheme}`}
        severity="success"
        variant={'filled'}
        open={openMessage}
        setOpen={setOpenMessage}
      />
    </>
  );
};
