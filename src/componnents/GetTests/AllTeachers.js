import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Item } from './Syles';

export default function AllTeachers() {

    const [teachers, setTeachers] = useState(null);

    useEffect(()=>{
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/teachers`);
        request.then(response => {
            setTeachers(response.data)
        })
    },[])

    return (
        <Container>
            <h1>Professores</h1>
            {teachers?.map(t => {
                return (
                    <Link key={t.id} to={`/teachers/${t.id}/${t.name}`}><Item >{t.name}</Item></Link>
                    );
            })}
        </Container>
    );
}