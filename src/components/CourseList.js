import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { Container } from "./ListContainer";
import { getCourses } from "../services/apiFunctions";

export default function CourseList({ setCourse }) {
  const [courses, setCourses] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

  useEffect(() => {
    getCourses(setCourses);
  }, []);

  return (
    <Container>
      <h1>Cursos</h1>
      {courses
        ? courses.map((c) => {
            return (
              <Item key={c.id} onClick={() => setCourse(c)}>
                {c.name}
              </Item>
            );
          })
        : loading}
    </Container>
  );
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-size: 15px;
  margin-top: 8px;
  cursor: pointer;
`;
