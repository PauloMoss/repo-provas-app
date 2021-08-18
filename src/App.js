import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/GlobalStyles";
import { ExamProvider } from "./context/ExamContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddNewExam from "./pages/AddNewExam";
import AllSubjects from "./pages/AllSubjects";
import AllTeachers from "./pages/AllTeachers";
import TestBySubject from "./components/ExamsBySubject";
import TestByTeacher from "./components/ExamsByTeacher";
import TestPdf from "./components/GetTests/TestPdf";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route path="/send_test">
          <Header />
          <AddNewExam />
        </Route>

        <Route exact path="/subjects">
          <Header />
          <AllSubjects />
        </Route>

        <Route exact path="/teachers">
          <Header />
          <AllTeachers />
        </Route>

        <ExamProvider>
          <Route exact path="/subjects/:id/:subject">
            <Header />
            <TestBySubject />
          </Route>

          <Route exact path="/teachers/:id/:teacher">
            <Header />
            <TestByTeacher />
          </Route>

          <Route exact path="/test/:id">
            <TestPdf />
          </Route>
        </ExamProvider>
      </Switch>
    </Router>
  );
}
