import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//import Loader from "react-loader-spinner";
import dayjs from "dayjs";
import styled from "styled-components";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import {
  getCategories,
  getCourses,
  getCourseSubjects,
  getSubjectTeachers,
  postNewExam,
} from "../services/apiFunctions";
import { validadeForm } from "../services/validadeForm";

export default function AddNewExam() {
  const history = useHistory();

  const [categories, setCategories] = useState(null);
  const [courses, setCourses] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [teachers, setTeachers] = useState(null);

  const [link, setLink] = useState("");
  const [course, setCourse] = useState(null);
  const [subject, setSubject] = useState(null);
  const [category, setCategory] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [userAlert, setUserAlert] = useState("");

  const [date, setDate] = useState(new Date());
  const [semester, setSemester] = useState(null);
  const [semesters, setSemesters] = useState(null);

  useEffect(() => {
    getCategories(setCategories);
    getCourses(setCourses);
    setSemesters([
      {
        year: dayjs(date).format("YYYY"),
        name: "1",
      },
      {
        year: dayjs(date).format("YYYY"),
        name: "2",
      },
    ]);
  }, [date]);

  useEffect(() => {
    setSubject(null);

    if (course) {
      getCourseSubjects(setSubjects, course.id);
    }
  }, [course]);

  useEffect(() => {
    setTeachers(null);

    if (subject) {
      getSubjectTeachers(setTeachers, subject.id);
    }
  }, [subject]);

  function sendExam(event) {
    event.preventDefault();

    setIsDisabled(true);
    const body = {
      link,
      subjectId: subject.id,
      teacherId: teacher.id,
      categoryId: category.id,
      semester,
    };

    let validationAlert = validadeForm(body, userAlert);

    if (validationAlert) {
      setUserAlert(<UserAlert>{validationAlert}</UserAlert>);
      return;
    }

    const postError = postNewExam(body);
    if (!postError) {
      history.push("/");
      setIsDisabled(false);
    } else {
      setIsDisabled(false);
      setUserAlert(
        <UserAlert>
          Erro {postError}, por favor verifique os dados e tente novamente.
        </UserAlert>
      );
    }
  }

  return (
    <Page>
      <Title>RepoProvas</Title>
      <FormContainer onSubmit={sendExam}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="exam-link">Pdf da prova</InputLabel>
          <OutlinedInput
            id="exam-link"
            fullWidth
            disabled={isDisabled}
            label="Pdf da prova"
            autoFocus
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </FormControl>

        <SelectInput
          loading={courses === null}
          loadingText="Carregando..."
          fullWidth
          disabled={isDisabled}
          options={courses || []}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Cursos" variant="outlined" />
          )}
          onChange={(_, value) => setCourse(value)}
        />

        <SelectInput
          loading={subjects === null}
          loadingText="Carregando..."
          disabled={course === null || isDisabled}
          fullWidth
          options={subjects || []}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Disciplina" variant="outlined" />
          )}
          onChange={(_, value) => setSubject(value)}
        />

        <SelectInput
          loading={teachers === null}
          loadingText="Carregando..."
          disabled={teachers === null || isDisabled}
          fullWidth
          options={teachers || []}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Professor(a)" variant="outlined" />
          )}
          onChange={(_, value) => setTeacher(value)}
        />

        <SelectInput
          loading={categories === null}
          loadingText="Carregando..."
          fullWidth
          disabled={isDisabled}
          options={categories || []}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Categoria" variant="outlined" />
          )}
          onChange={(_, value) => setCategory(value)}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            style={{ marginTop: `10px` }}
            fullWidth
            disabled={isDisabled}
            views={["year"]}
            label="Ano"
            value={date}
            TextFieldComponent={(params) => (
              <TextField {...params} label="Ano" variant="outlined" />
            )}
            onChange={setDate}
          />
        </MuiPickersUtilsProvider>

        <SelectInput
          style={{ marginBottom: `10px` }}
          fullWidth
          disabled={isDisabled}
          options={semesters || []}
          getOptionLabel={(option) => `${option.year}.${option.name}`}
          renderInput={(params) => (
            <TextField {...params} label="Período" variant="outlined" />
          )}
          onChange={(_, value) => setSemester(value)}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{
            marginBottom: "10px",
            backgroundColor: "#6c6f79",
            color: "white",
          }}>
          Enviar Prova
        </Button>
      </FormContainer>
      {userAlert}
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  span {
    color: #ffffff;
  }
  div {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  margin-top: 160px;
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 32px;
  font-family: "Saira Stencil One", cursive;
`;

const FormContainer = styled.form`
  min-width: 300px;
  width: 25%;
  border-radius: 20px;
  padding: 10px;
  background-color: #ffffff;
`;

const UserAlert = styled.div`
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  color: red;
`;

const SelectInput = styled(Autocomplete)`
  margin-top: 10px;
  cursor: default;
`;
