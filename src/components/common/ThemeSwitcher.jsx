import React from 'react';
import * as Toggle from '@components/tailus-ui/Toggle';
import { useTheme } from '@context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Toggle.ToggleRoot
      pressed={theme === 'dark'}
      onPressedChange={(pressed) => setTheme(pressed ? 'dark' : 'light')}
      variant="soft"
      size="lg"
      intent="primary"
      className="fixed bottom-4 right-4 rounded-full"
      aria-label="Toggle theme"
    >
      <Toggle.ToggleIcon>
        {theme === 'dark' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Toggle.ToggleIcon>
    </Toggle.ToggleRoot>
  );
};