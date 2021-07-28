import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import { Container, Input, Select, Button, UserAlert } from './Styles';

export default function AddNewTest() {

    const history = useHistory();
    const [link, setLink] = useState("");
    const [subject, setSubject] = useState("");
    const [teacher, setTeacher] = useState("");
    const [category, setCategory] = useState("");
    const [buttonStatus, setButtonStatus] = useState({ status:"Cadastrar", userAlert: "", isDisabled: false});
    const { status, userAlert, isDisabled } = buttonStatus;

    const context = {
        subjects: [{id: 1, name:'Materia 1', teachers:['T1','T2']},{id: 2,name:'Materia 2',teachers:['T3','T4']},{id: 3,name:'Materia 3',teachers:['T5','T6']}],
        teachers: ['Fulano 1','Fulano 2','Fulano 3'],
        category: ['P1','P2','PF']
    }
    console.log(subject)
    function handleOnChange(e) {
        setLink(e.target.value)
    }

    function userSignUp(event) {
        event.preventDefault();
        
        
        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={19} width={50}/>, userAlert: "", isDisabled: true});

        const body = {link, subject: subject.name, teacher, category};
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
                    <Select onChange={e => setSubject(context.subjects.find(n => n.id == e.target.value))}>
                        <option disabled selected value > -- Selecione uma Disciplina -- </option>
                        {context.subjects.map(s => <option value={s.id}>{s.name}</option>)}
                    </Select>
                    <Select onChange={(e) => setTeacher(e.target.value)}>
                        <option disabled selected value > -- Selecione um Professor -- </option>
                        {subject ? subject.teachers.map(t => <option value={t}>{t}</option>) : ""}
                    </Select>
                    <Select onChange={(e) => setCategory(e.target.value)}>
                        <option disabled selected value > -- Selecione o tipo de Prova -- </option>
                        {context.category.map(c => <option value={c}>{c}</option>)}
                    </Select>
                    <Button type="submit" >{status}</Button>
                </form>
                {userAlert}
            </Container>
        </>
    );
}