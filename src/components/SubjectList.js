import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { Container } from "./ListContainer";
import ListItem from "./ListItem";
import { getCourseSubjectsExams, getCategories } from "../services/apiFunctions";

export default function SubjectList({ courseId, setCourse }) {
  const [examsCategories, setExamsCategories] = useState(null);
  const [subjectsExams, setSubjectsExams] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

  useEffect(() => {
    getCategories(setExamsCategories);
    getCourseSubjectsExams(setSubjectsExams, courseId);
  }, []);

  return (
    <Container>
      <h1>Disciplinas</h1>

      {subjectsExams ? (
        <>
          {subjectsExams.length === 0
            ? "Nenhuma Disciplina Encontrada"
            : subjectsExams.map((semester) => {
                return (
                  <>
                    <Title key={semester.id}>{semester.name} Semestre</Title>
                    {semester.subjects.map((s) => {
                      return (
                        <ListItem
                          key={s.id}
                          title={s.name}
                          exams={s.exams}
                          examsCategories={examsCategories}
                        />
                      );
                    })}
                  </>
                );
              })}
        </>
      ) : (
        loading
      )}
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

const Title = styled.div`
  margin: 15px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
