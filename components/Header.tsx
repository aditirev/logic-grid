
import React from 'react';
import { SettingsIcon, SunIcon, MoonIcon } from './icons';

interface HeaderProps {
    level: number;
    onSettingsClick: () => void;
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ level, onSettingsClick, isDarkMode, setIsDarkMode }) => {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    };

    return (
        <header className="w-full max-w-sm mx-auto p-4 flex justify-between items-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Logic Grid</h1>
                <p className="text-slate-500 dark:text-slate-400">Level {level}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={toggleDarkMode}
                    className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}
                </button>
                <button
                    onClick={onSettingsClick}
                    className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Game Settings"
                >
                    <SettingsIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
