import { useState } from "react";

import { Container } from "../components/ListContainer";
import CourseList from "../components/CourseList";
import SubjectList from "../components/SubjectList";

export default function AllSubjects() {
  const [course, setCourse] = useState(null);

  return (
    <Container>
      {course ? (
        <SubjectList courseId={course.id} setCourse={setCourse} />
      ) : (
        <CourseList setCourse={setCourse} />
      )}
    </Container>
  );
}
