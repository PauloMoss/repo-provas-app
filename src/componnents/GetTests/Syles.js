import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
width: 80%;
margin: 200px auto;
    h1 {
        font-size: 25px;
        margin-bottom: 30px;
        font-family: 'Saira Stencil One', cursive;
        color:#FFFFFF;
    }

`;

const Title = styled.div`
    margin: 15px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
`;

const Item = styled.div`
    display:flex;
    justify-content: space-between;
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 8px;
`;



export { Container, Title, Item };