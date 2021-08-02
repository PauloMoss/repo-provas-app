import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import { Container, Title, Item } from './Syles';

export default function AllSubjects() {

    const [subjectsBySemester, setSubjectsBySemester] = useState(null);
    const loading = <Loader type="Oval" color="#FFFFFF" height={40} width={40} />;

    useEffect(()=>{
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects`);
        request.then(response => {
            const semesterWithSubject = response.data.filter(s => s.subjects.length > 0)
            setSubjectsBySemester(semesterWithSubject)
        })
    },[])

    return (
        <Container>
            <h1>Disciplinas</h1>
            {subjectsBySemester ? subjectsBySemester.map(semester => {
                return (
                    <>
                        <Title key={semester.id}>{semester.name}</Title>
                        {semester.subjects.map(s => {
                            return (
                            <Link key={s.id} to={`/subjects/${s.id}/${s.name}`}><Item key={s.id}>{s.name}</Item></Link>
                            )
                        })}
                    </>
                );
            }) : loading}
        </Container>
    );
}