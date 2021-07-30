import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import { Container, Input, Select, Button, UserAlert } from './Styles';

export default function AddNewTest() {

    const history = useHistory();
    const [testParams, setTestParams] = useState(null);
    const [link, setLink] = useState("");
    const [subject, setSubject] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [category, setCategory] = useState(null);
    const [buttonStatus, setButtonStatus] = useState({ status:"Cadastrar", userAlert: "", isDisabled: false});
    const { status, userAlert, isDisabled } = buttonStatus;
    console.log({link, subjectId: subject.id, teacherId: teacher, categoryId: category, periodId: 1})
    useEffect(()=>{
        const request = axios.get("http://localhost:4000/subjects/new_test");
        request.then(response => {
            setTestParams(response.data)
        })
    },[])

    function handleOnChange(e) {
        setLink(e.target.value)
    }

    function userSignUp(event) {
        event.preventDefault();
        
        
        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={19} width={50}/>, userAlert: "", isDisabled: true});

        const body = {link, subjectId: subject.id, teacherId: teacher, categoryId: category, periodId: 1};
        console.log(body)
        const request = axios.post("http://localhost:4000/new_test", body);
        request.then(() => history.push("/"));
        request.catch(() => {
            setButtonStatus({status:"Cadastrar", userAlert: <UserAlert>Por favor, verifique os dados e tente novamente.</UserAlert>, isDisabled: false});
        })
    }
    
    return(
        <>
            <Container>
                <h1>RepoProvas</h1>
                <form onSubmit={userSignUp}>
                    <Input type="text" placeholder="link" value={link} disabled={isDisabled} onChange={e => handleOnChange(e)}/>
                    <Select onChange={e => setSubject(testParams.subjects.find(n => n.id === Number(e.target.value)))}>
                        <option disabled selected value > -- Selecione uma Disciplina -- </option>
                        {testParams?.subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </Select>
                    <Select onChange={(e) => setTeacher(Number(e.target.value))}>
                        <option disabled selected value > -- Selecione um Professor -- </option>
                        {subject ? subject.teachers.map(t => <option key={t.id} value={t.id}>{t.name}</option>) : ""}
                    </Select>
                    <Select onChange={(e) => setCategory(Number(e.target.value))}>
                        <option disabled selected value > -- Selecione o tipo de Prova -- </option>
                        {testParams?.categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </Select>
                    <Button type="submit" >{status}</Button>
                </form>
                {userAlert}
            </Container>
        </>
    );
}