import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
width: 80%;
margin: 200px auto;

        button {
            margin-top: 10px;
            margin-bottom: 25px;
            border: none;
        }
`;

const Title = styled.div`
    height: 45px;
    background: #A328D6;
    color: #FFFFFF;
    font-size: 20px;
`;

const Item = styled.div`
    color: #FFFFFF;
    font-size: 15px;
`;



export { Container, Title, Item };