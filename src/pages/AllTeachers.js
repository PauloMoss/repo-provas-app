import { useState } from "react";

import CourseList from "../components/CourseList";
import TeacherList from "../components/TeacherList";
import { Container } from "../components/ListContainer";

export default function AllTeachers() {
  const [course, setCourse] = useState(null);

  return (
    <Container>
      {course ? (
        <TeacherList courseId={course.id} setCourse={setCourse} />
      ) : (
        <CourseList setCourse={setCourse} />
      )}
    </Container>
  );
}
