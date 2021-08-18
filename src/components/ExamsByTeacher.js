import { useParams } from "react-router-dom";
import GenericListOfTests from "./GetTests/GenericListOfTests";

export default function ExamsByTeacher() {
  const { id, teacher } = useParams();
  const type = "teacher";
  const url = `${process.env.REACT_APP_API_BASE_URL}/tests/teacher/${id}`;

  return <GenericListOfTests title={teacher} type={type} url={url} />;
}
