import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsSection = styled.section`
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Wraper = styled.div`
    display: flex;

    margin-bottom: 20px;
`;

export const Info = styled.div`
    padding-left: 20px;
    padding-top: 10px;
`;

export const Name = styled.h2`
    font-weight: 500;
    font-size: 25px;
    margin: 0;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 20px;
    width: 700px;
    line-height: 1.3;
`;

export const Text = styled.h3`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Genres = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 400;
    font-size: 14px;
    padding-left: 12px;
    list-style: none;
`;

export const GenresItem = styled.li`
    &:not(:last-child) {
        /* margin-bottom: 5px; */
    }
`;

export const LinkList = styled.ul`
    display: flex;
    margin-top: 15px;
    list-style: none;
`;

export const LinkItem = styled.li`
    margin-left: 12px;
    list-style: none;
    &:not(:last-child) {
        margin-right: 5px;
    }
`;

export const LinkMovie = styled(NavLink)`
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    color:#000;
    &.active {
        color: #3b81d7;
    }
`;

export const BtnGoBack = styled(Link)`
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: gray;
    font-weight: 500;
    margin-bottom: 25px;
    width: 70px;
    display: flex;
    justify-content: center;

    &:hover {
        color: lightgray;
    }
`;