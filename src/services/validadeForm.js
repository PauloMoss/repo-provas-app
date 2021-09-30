export function validadeForm(body, userAlert) {
  const { link, subjectId, teacherId, categoryId, semester } = body;

  if (!link) {
    userAlert = "Insira um link para o teste";
    return userAlert;
  } else if (!subjectId) {
    userAlert = "Por favor, selecione uma disciplina";
    return userAlert;
  } else if (!teacherId) {
    userAlert = "Por favor, selecione um professor";
    return userAlert;
  } else if (!categoryId) {
    userAlert = "Por favor, selecione uma prova";
    return userAlert;
  } else if (!semester) {
    userAlert = "Por favor, selecione um semestre";
    return userAlert;
  }
  return userAlert;
}
