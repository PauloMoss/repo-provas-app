import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import ListItem from "../components/ListItem";

import {
  getCourseSubjectsExams,
  getCategories,
  getCourses,
} from "../services/apiFunctions";

export default function AllSubjects() {
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);
  const [examsCategories, setExamsCategories] = useState(null);
  const [subjectsExams, setSubjectsExams] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

  useEffect(() => {
    getCategories(setExamsCategories);
    getCourses(setCourses);
  }, []);

  useEffect(() => {
    if (course) {
      getCourseSubjectsExams(setSubjectsExams, course.id);
    }
  }, [course]);

  return (
    <Container>
      <h1>{course ? "Disciplinas" : "Cursos"}</h1>

      {courses ? "" : loading}

      {course &&
        subjectsExams &&
        subjectsExams.map((semester) => {
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

      {course ? (
        <Button onClick={() => setCourse(null)}>Voltar</Button>
      ) : (
        courses?.map((c) => {
          return (
            <Item key={c.id} onClick={() => setCourse(c)}>
              {c.name}
            </Item>
          );
        })
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 600px;
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
  cursor: pointer;
`;

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
