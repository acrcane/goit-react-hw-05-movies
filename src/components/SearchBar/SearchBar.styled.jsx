import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    margin-top: 25px;
    gap: 20px;
`;

export const Input = styled.input`
    font-family: inherit;
    font-size: 18px;
    line-height: 1.15;
    margin: 0;
    line-height: 1.3;
    color: #fff;
    background-color: #2e2e2e;
    width: 300px;
    height: 30px;
    margin-right: 10px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    background-color: #2e2e2e;
    font-size: 18px;
    font-weight: 500;
    border: none;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: lightgray;
    }
`;