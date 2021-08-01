import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 80%;
margin: 200px auto;
        h1 {
            margin-top: 160px;
            margin-bottom: 40px;
            color:#FFFFFF;
            font-size: 40px;
            font-family: 'Saira Stencil One', cursive;
        }
        button {
            margin-top: 10px;
            margin-bottom: 25px;
            border: none;
        }
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #A328D6;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
`;

export { Container, Button };