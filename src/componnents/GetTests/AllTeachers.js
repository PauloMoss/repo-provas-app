import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Title, Item } from './Syles';

export default function AllTeachers() {

    const [teachers, setTeachers] = useState(null);

    useEffect(()=>{
        const request = axios.get("http://localhost:4000/teachers");
        request.then(response => {
            setTeachers(response.data)
        })
    },[])

    return (
        <Container>
            <h1>Professores</h1>
            {teachers?.map(t => {
                return (
                    <Link to={`/teachers/${t.id}/${t.name}`}><Item key={t.id}>{t.name}</Item></Link>
                    );
            })}
        </Container>
    );
}