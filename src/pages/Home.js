import { Link } from "react-router-dom";
import styled from "styled-components";

import HomeImage from "../assets/images/home_image2.svg";
import SendTest from "../assets/images/send_test.svg";
import Subjects from "../assets/images/subjects.svg";
import Teachers from "../assets/images/teachers.svg";

export default function Home() {
  return (
    <Page>
      <Container>
        <img src={HomeImage} />
        <h1>RepoProvas</h1>

        <Options>
          <Item>
            <Link to="/send_test">
              <LinkImage src={SendTest} />
            </Link>
            Enviar uma Prova
          </Item>

          <Item>
            <Link to="/subjects">
              <LinkImage src={Subjects} />
            </Link>
            Provas por Disciplina
          </Item>

          <Item>
            <Link to="/teachers">
              <LinkImage src={Teachers} />
            </Link>
            Provas por Professores
          </Item>
        </Options>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Saira Stencil One", cursive;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 50px auto;
  h1 {
    margin-top: 20px;
    margin-bottom: 100px;
    color: #ffffff;
    font-size: 50px;
  }
  & > img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50px;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  margin: 0 70px;
`;

const LinkImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-shadow: 10px 5px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  margin-bottom: 20px;
`;
