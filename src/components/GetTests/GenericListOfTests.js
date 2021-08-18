import { useEffect, useState, useContext } from "react";
import axios from "axios";

import { Container, Title, Item } from "./Syles";
import TestContext from "../../context/ExamContext";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function GenericListOfTests(props) {
  const { title, type, url } = props;
  const { setTestLink } = useContext(TestContext);
  const [testsList, setTestsList] = useState(null);
  const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;
  const categories = [];

  useEffect(() => {
    const request = axios.get(url);
    request.then((response) => {
      setTestsList(response.data);
    });
  }, [url]);

  testsList &&
    testsList[0].tests.forEach((t) => {
      if (
        categories.length === 0 ||
        !categories.find((c) => t.category.name === c.name)
      ) {
        categories.push(t.category);
      }
    });

  function openTestModal(id, link) {
    setTestLink({ id, link });
  }

  return (
    <Container>
      <h1>{title}</h1>
      {categories.length
        ? categories.map((c) => {
            return (
              <>
                <Title key={c.id}>{c.name}</Title>
                {testsList
                  ? testsList[0].tests.filter((t) => t.category.name === c.name).length >
                    0
                    ? testsList[0].tests
                        .filter((t) => t.category.name === c.name)
                        .map((s) => {
                          return (
                            <Item key={s.id}>
                              <Link
                                to={`/test/${s.id}`}
                                onClick={() => openTestModal(s.id, s.link)}>
                                <span>{s.period.name}</span> -{" "}
                                <span>
                                  {type === "subject" ? s.teacher.name : s.subject.name}
                                </span>
                              </Link>
                            </Item>
                          );
                        })
                    : "Nenhuma prova disponivel"
                  : loading}
              </>
            );
          })
        : "Nenhuma prova disponivel"}
    </Container>
  );
}