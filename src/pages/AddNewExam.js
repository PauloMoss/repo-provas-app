import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import dayjs from "dayjs";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddNewExam() {
  const history = useHistory();
  const [testParams, setTestParams] = useState(null);
  const [link, setLink] = useState("");
  const [subject, setSubject] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [category, setCategory] = useState(null);
  const [buttonStatus, setButtonStatus] = useState({
    status: "Cadastrar",
    userAlert: "",
    isDisabled: false,
  });
  const { status, userAlert, isDisabled } = buttonStatus;

  const [year, setYear] = useState(new Date());
  const [period, setPeriod] = useState(null);
  const semester = [`${dayjs(year).format("YYYY")}.1`, `${dayjs(year).format("YYYY")}.2`];

  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects/new_test`);
    request.then((response) => {
      setTestParams(response.data);
    });
  }, []);

  function handleOnChange(e) {
    setLink(e.target.value);
  }

  function userSignUp(event) {
    event.preventDefault();

    if (!link) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Insira um link para o teste</UserAlert>,
      });
      return;
    } else if (!subject) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Por favor, selecione uma disciplina</UserAlert>,
      });
      return;
    } else if (!teacher) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Por favor, selecione um professor</UserAlert>,
      });
      return;
    } else if (!category) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Por favor, selecione uma prova</UserAlert>,
      });
      return;
    } else if (!period) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Por favor, selecione um periodo</UserAlert>,
      });
      return;
    } else if (!year) {
      setButtonStatus({
        ...buttonStatus,
        userAlert: <UserAlert>Por favor, selecione um ano</UserAlert>,
      });
      return;
    }

    setButtonStatus({
      status: <Loader type="ThreeDots" color="#FFFFFF" height={19} width={50} />,
      userAlert: "",
      isDisabled: true,
    });

    const body = {
      link,
      subjectId: subject.id,
      teacherId: teacher,
      categoryId: category,
      period,
      year,
    };

    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/new_test`, body);
    request.then(() => history.push("/"));
    request.catch(() => {
      setButtonStatus({
        status: "Cadastrar",
        userAlert: (
          <UserAlert>Por favor, verifique os dados e tente novamente.</UserAlert>
        ),
        isDisabled: false,
      });
    });
  }

  return (
    <>
      <Container>
        <h1>RepoProvas</h1>
        <form onSubmit={userSignUp}>
          <Input
            type="text"
            placeholder="link"
            value={link}
            disabled={isDisabled}
            onChange={(e) => handleOnChange(e)}
          />
          <Select
            onChange={(e) =>
              setSubject(testParams.subjects.find((n) => n.id === Number(e.target.value)))
            }>
            <option disabled selected value>
              {" "}
              -- Selecione uma Disciplina --{" "}
            </option>
            {testParams?.subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </Select>
          <Select onChange={(e) => setTeacher(Number(e.target.value))}>
            <option disabled selected value>
              {" "}
              -- Selecione um Professor --{" "}
            </option>
            {subject
              ? subject.teachers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))
              : ""}
          </Select>
          <Select onChange={(e) => setCategory(Number(e.target.value))}>
            <option disabled selected value>
              {" "}
              -- Selecione o tipo de Prova --{" "}
            </option>
            {testParams?.categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
          <SelectYear
            selected={year}
            onChange={(date) => setYear(date)}
            showYearPicker
            dateFormat="yyyy"
          />
          <Select onChange={(e) => setPeriod(e.target.value)}>
            <option disabled selected value>
              {" "}
              -- Selecione o Periodo --{" "}
            </option>
            {semester.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <Button type="submit">{status}</Button>
        </form>
        {userAlert}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-top: 160px;
    margin-bottom: 40px;
    color: #ffffff;
    font-size: 32px;
    font-family: "Saira Stencil One", cursive;
  }
  button {
    margin-top: 10px;
    margin-bottom: 25px;
    border: none;
  }
  span {
    color: #ffffff;
  }
  div {
    font-size: 14px;
  }
`;

const Input = styled.input`
  display: block;
  width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px 0;
  font-size: 15px;
  color: #000;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  font-family: "Raleway", sans-serif;
  ::placeholder {
    color: #000;
    opacity: 0.5;
  }
`;

const Select = styled.select`
  display: block;
  width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px 0;
  font-size: 15px;
  color: #000;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  font-family: "Raleway", sans-serif;
  ::placeholder {
    color: #000;
    opacity: 0.5;
  }
  cursor: default;
`;

const Button = styled.button`
  width: 303px;
  height: 45px;
  background-color: #6c6f79;
  box-shadow: 10px 5px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
`;
const UserAlert = styled.div`
  text-align: center;
  font-weight: 700;
  margin-top: 10px;
  color: red;
`;

const SelectYear = styled(DatePicker)`
  display: block;
  width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 6px 0;
  font-size: 15px;
  color: #000;
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  font-family: "Raleway", sans-serif;
  ::placeholder {
    color: #000;
    opacity: 0.5;
  }
  cursor: default;
`;
