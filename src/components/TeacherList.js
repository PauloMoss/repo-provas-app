import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import { Container } from "./ListContainer";
import ListItem from "../components/ListItem";
import { getCourseTeachersExams, getCategories } from "../services/apiFunctions";

export default function TeacherList({ courseId, setCourse }) {
  const [examsCategories, setExamsCategories] = useState(null);
  const [teachersExams, setTeachersExams] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

  useEffect(() => {
    getCategories(setExamsCategories);
    getCourseTeachersExams(setTeachersExams, courseId);
  }, []);

  return (
    <Container>
      <h1>Professores</h1>

      {teachersExams
        ? teachersExams.length === 0
          ? "Nenhum Professor Encontrado"
          : teachersExams.map((te) => (
              <ListItem
                key={te.id}
                title={te.name}
                exams={te.exams}
                examsCategories={examsCategories}
              />
            ))
        : loading}

      <Button onClick={() => setCourse(null)}>Voltar</Button>
    </Container>
  );
}

const Button = styled.button`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 19px;
  color: #fff;
  margin: 30px;
  background: transparent;
  border-radius: 20px;
`;
