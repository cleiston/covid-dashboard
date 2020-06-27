import styled from 'styled-components';
import coverPhoto from '../../assets/coverPhoto.jpg';

export const Container = styled.div`
    width: 100%;
    height: 350px;
    background-image: url(${coverPhoto});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Window = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .3) , rgba(0, 0, 0, .8));
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media(max-width: 600px) {
        background-color: rgba(0, 0, 0, .7);
    }
`;

export const Message = styled.div`
    color: var(--white);
    padding: 20px;
    width: 55%;

    @media(max-width: 600px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 20px;
    text-transform: uppercase;
    padding: 5px;
`;

export const Text = styled.p`
    color: var(--white);
    font-size: 13px;
    padding: 10px;
`;