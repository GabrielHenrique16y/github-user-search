import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../config/colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? darkTheme.primaryColor : lightTheme.primaryColor;
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: isDarkMode ? darkTheme : lightTheme }}>
            <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
