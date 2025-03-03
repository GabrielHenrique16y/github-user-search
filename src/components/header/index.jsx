import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Nav, ToggleButton } from './styled';

export default function Header() {
    const { toggleTheme, isDarkMode } = useTheme();

    return (
        <Nav>
            <h1>GitHub Search</h1>
            <ToggleButton onClick={toggleTheme}>
                {isDarkMode ? '🌙' : '☀'}
            </ToggleButton>
        </Nav>
    );
}
