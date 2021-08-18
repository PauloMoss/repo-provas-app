import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function AllTeachers() {
  const [teachers, setTeachers] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/teachers`);
    request.then((response) => {
      setTeachers(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Professores</h1>
      {teachers
        ? teachers.map((t) => {
            return (
              <Link key={t.id} to={`/teachers/${t.id}/${t.name}`}>
                <Item>{t.name}</Item>
              </Link>
            );
          })
        : loading}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 200px auto;
  h1 {
    font-size: 25px;
    margin-bottom: 30px;
    font-family: "Saira Stencil One", cursive;
    color: #ffffff;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 15px;
  margin-top: 8px;
`;
