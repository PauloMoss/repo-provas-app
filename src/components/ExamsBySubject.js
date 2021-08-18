import { useParams } from "react-router-dom";
import GenericListOfTests from "./GetTests/GenericListOfTests";

export default function ExamsBySubject() {
  const { id, subject } = useParams();
  const type = "subject";
  const url = `${process.env.REACT_APP_API_BASE_URL}/tests/subject/${id}`;

  return <GenericListOfTests title={subject} type={type} url={url} />;
}
