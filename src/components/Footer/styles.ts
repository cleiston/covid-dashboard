import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: var(--footer);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 25px 0px;
`;

export const Item = styled.div`
    min-height: 150px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 20px;
    text-transform: uppercase;
`;

export const AdditionalInfo = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul{
        list-style: none;
        padding: 15px;
    }

    & > ul > li {
        margin: 5px 0;
    }

    & ul > li > a {
        text-decoration: none;
        color: var(--white);
        font-size: 14px;

        &:hover {
            color: var(--link);
        }
    }
`;

export const Contact = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul{
        list-style: none;
        padding: 15px;
        display: flex;
        flex-direction: row;
    }

    & ul > li > a {
        text-decoration: none;
        color: var(--white);
        padding: 10px;
        font-size: 20px;

        &:hover {
            color: var(--link);
        }
    }
`;