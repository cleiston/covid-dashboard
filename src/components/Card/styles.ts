import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 300px;
    margin: 25px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 15px;
    transition: box-shadow .3s;
    animation-name: rotateCard;
    animation-duration: .5s;
    

    @keyframes rotateCard {
        from {
            transform: rotateY(-180deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

    &:hover {
        box-shadow: 1px 1px 3px 2px ${ props => props.color ? props.color : '#ccc'};    
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 15px 15px 0 0;
    background-color: ${ props => props.color ? props.color : '#ccc'};

    > h2 {
        color: var(--white);
        font-size: 15px;
        padding: 10px 15px;
        text-align: center;
        text-shadow: 1px;
    }
`;

export const Body = styled.div`
    width: 100%;
    height: 180px;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.p`
    font-size: 30px;
    color: #222;
    padding: 10px;
    font-weight: 700;
`;

export const Footer = styled.div`
    height: 60px;
    width: 100%;
    border-radius: 0 0 15px 15px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h3 {
        padding: 5px;
        font-size: 14px;
    }

    > span {
        font-size: 14px;
    }
`;

