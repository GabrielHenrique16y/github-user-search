import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColor};
    padding: 15px 30px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
`;

export const ToggleButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    transition: color 0.3s ease;

    &:hover {
        color: ${(props) => props.theme.linkColor};
    }
`;
