import styled from "styled-components";

export default function ExamCategory({ name, examCategory, exams }) {
  const categoryExams = exams.filter((e) => e.categoryId === examCategory.id);
  if (categoryExams.length === 0) return null;

  return (
    <>
      <TestCategoryTitle>{name}</TestCategoryTitle>
      {categoryExams.map((exam) => (
        <Test key={exam.id} href={exam.link}>
          {`${exam.semester.year}.${exam.semester.name}`}{" "}
          <span className="subject">
            ({exam.subject ? exam.subject.name : exam.teacher.name})
          </span>
        </Test>
      ))}
    </>
  );
}

const TestCategoryTitle = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Test = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3px;
  text-decoration: none;
  & .subject {
    color: rgba(255, 255, 255, 0.4);
  }
  &:hover {
    color: #1a73e8;
  }
`;
