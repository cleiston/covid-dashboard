import styled from 'styled-components';

export const Container = styled.div`
    background-color: lightgray;
    border-radius: 15px;
    height: 300px;
    width: 450px;
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: box-shadow .3s;
    animation-name: rotateChart;
    animation-duration: .5s;
    

    @keyframes rotateChart {
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

    > h2 {
        font-size: 15px;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${ props => props.color ? props.color : '#ccc'};
    border-radius: 15px 15px 0 0;
    padding: 20px;
    font-weight: bold;
    color: var(--white);
`;

export const Body = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px 20px;
`;

export const Footer = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 0 0 15px 15px;
    font-size: 12px;
    text-align: right;
    padding: 20px;
`;
