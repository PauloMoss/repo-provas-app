import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Title, Item } from './Syles';

export default function TestBySubject() {

    const { id, subject } = useParams();
    const [testsByCategory, setTestsByCategory] = useState(null);

    useEffect(()=>{
        const request = axios.get(`http://localhost:4000/tests/subject/${id}`);
        request.then(response => {
            setTestsByCategory(response.data)
        })
    },[])

    return (
        <Container>
            <h1>{subject}</h1>
            {testsByCategory?.map(category => {
                return (
                    <>
                        <Title key={category.id}>{category.name}</Title>
                        {category.tests.map(s => {
                            return (
                            <a href={`${s.link}`}><Item key={s.id}>Professor:{s.teacher.name} , Year:{s.period.year}</Item></a>
                            )
                        })}
                    </>
                );
            })}
        </Container>
    );
}