import axios from "axios";

export function getCategories(setCategories) {
  const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`);
  request.then((response) => {
    setCategories(response.data);
  });
  request.catch(() => alert("Desculpe, erro ao carregar as categorias da prova"));
}

export function getCourses(setCourses) {
  const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/courses`);
  request.then((response) => {
    setCourses(response.data);
  });
  request.catch(() => alert("Desculpe, erro ao carregar os cursos"));
}

export function getCourseSubjects(setSubjects, courseId) {
  const request = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/course/${courseId}/subjects`
  );
  request.then((response) => {
    setSubjects(response.data);
  });
  request.catch(() => alert("Desculpe, erro ao carregar as disciplinas desse curso"));
}

export function getSubjectTeachers(setTeachers, subjectId) {
  const request = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/subject/${subjectId}/teachers`
  );
  request.then((response) => {
    setTeachers(response.data);
  });
  request.catch(() =>
    alert("Desculpe, erro ao carregar os professores dessa disciplina")
  );
}

export function getCourseTeachersExams(setTeachersExams, courseId) {
  const request = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/course/${courseId}/teachers/exams`
  );
  request.then((response) => {
    setTeachersExams(response.data);
  });
  request.catch(() => alert("Desculpe, erro ao carregar as provas desses professores"));
}

export function getCourseSubjectsExams(setSubjectsExams, courseId) {
  const request = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/course/${courseId}/subjects/exams`
  );
  request.then((response) => {
    setSubjectsExams(response.data);
  });
  request.catch(() => alert("Desculpe, erro ao carregar as provas dessas disciplina"));
}

export function postNewExam(body) {
  let postError;
  const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/new_test`, body);
  request.then(() => (postError = false));
  request.catch((e) => (postError = e.response.status));

  return postError;
}
