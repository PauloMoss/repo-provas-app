import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Title, Item } from './Syles';

export default function AllSubjects() {

    const [subjectsBySemester, setSubjectsBySemester] = useState(null);

    useEffect(()=>{
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects`);
        request.then(response => {
            setSubjectsBySemester(response.data)
        })
    },[])

    return (
        <Container>
            <h1>Disciplinas</h1>
            {subjectsBySemester?.map(semester => {
                return (
                    <>
                        <Title key={semester.id}>{semester.name}</Title>
                        {semester.subjects.map(s => {
                            return (
                            <Link key={s.id} to={`/subjects/${s.id}/${s.name}`}><Item>{s.name}</Item></Link>
                            )
                        })}
                    </>
                );
            })}
        </Container>
    );
}

/**/