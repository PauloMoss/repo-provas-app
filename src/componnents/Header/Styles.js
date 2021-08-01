import styled from 'styled-components';

const HeaderStyles = styled.header`
    width: 100%;
    height: 75px;
    background-color: #ec5d98;
    padding: 0 22px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    & > span {
        font-family: "Passion One", sans-serif;
        font-weight: 700;
        font-size: 50px;
        letter-spacing: 1px;
        color: #fff;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;    

    svg {
        width: 20px;
        color:  #fff;
    }

    img {
        border-radius: 50%;
        height: 55px;
        margin-left: 10px;
        width: 55px;
        object-fit: cover;
    }
`;

const ToggleMenu = styled.div`
    width: 200px;
    background-color: #ec5d98;
    position: fixed;
    top: 75px;
    right: 0;
    border-radius: 0px 0px 0px 20px;
    display: ${props => props.menuSelected ? "block" : "none"};
    z-index: 1;

    ul {
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    li {
        font-size: 15px;
        font-weight: 700;
        margin-top: 10px;
        color: #000;
        text-align: center;
    }
`;

export { HeaderStyles, Menu, ToggleMenu };