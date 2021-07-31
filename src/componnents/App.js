import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css';
import Header from './Header/Header';
import Home from './Home/Home';
import AddNewTest from './NewTest/AddNewTest';
import AllSubjects from './GetTests/AllSubjects';
import AllTeachers from './GetTests/AllTeachers';
import TestBySubject from './GetTests/TestBySubject';
import TestByTeacher from './GetTests/TestByTeacher';

export default function App() {
    return(
        <Router>
            <GlobalStyle/>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home/>
                </Route>
                <Route path="/send_test">
                    <Header />
                    <AddNewTest/>
                </Route>
                <Route exact path="/subjects">
                    <Header />
                    <AllSubjects/>
                </Route>
                <Route exact path="/subjects/:id/:subject">
                    <Header />
                    <TestBySubject/>
                </Route>
                <Route exact path="/teachers">
                    <Header />
                    <AllTeachers/>
                </Route>
                <Route exact path="/teachers/:id/:teacher">
                    <Header />
                    <TestByTeacher/>
                </Route>
            </Switch>
        </Router>
    );
}