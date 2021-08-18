import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <Logo>RepoProvas</Logo>
        <Menu>
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>
            <Link to={"/send_test"}>Enviar Teste</Link>
          </span>
          <span>
            <Link to={"/teachers"}>Professores</Link>
          </span>
          <span>
            <Link to={"/subjects"}>Disciplinas</Link>
          </span>
        </Menu>
      </HeaderStyles>
    </>
  );
}

const HeaderStyles = styled.header`
  width: 100%;
  height: 75px;
  background-color: transparent;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #fff;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-family: "Saira Stencil One", cursive;
    font-weight: 400;
    font-size: 19px;
    color: #fff;
    margin: 15px;
  }
`;
