import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavLinks = styled(NavLink)`
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: #090909;
    font-weight: 500;

    &.active {
        color: #3b81d7;

    }
    &:hover {
        color: #3b81d7;
    }
`;

export const HeaderLinks = styled.header`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    padding: 24px;
    max-width: 1160px;
    border-bottom-left-radius: 75px;
    border-bottom-right-radius: 75px;
    align-items: center;
    /* justify-content: space-between; */
    background-color: #b8b8b883;

    > nav {
        display: flex;
        gap: 12px;
        padding: 0;
        margin-left: auto;
        margin-right: auto;
        /* max-width: 1200px; */
    }
`;