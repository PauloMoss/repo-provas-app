import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Title, Item } from './Syles';

export default function TestBySubject() {

    const { id, subject } = useParams();
    const [testsBySubject, setTestsBySubject] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const request = axios.get(`http://localhost:4000/tests/subject/${id}`);
        request.then(response => {
            setTestsBySubject(response.data)
        })
    },[])

    testsBySubject && testsBySubject[0].tests.forEach(t => {
        if(categories.length === 0 || !categories.find(c => t.category.name === c.name)){
            categories.push(t.category)
        }
    });

    return (
        <Container>
            <h1>{subject}</h1>
            {categories.map(c => {
                return (
                    <>
                        <Title key={c.id}>{c.name}</Title>
                        {testsBySubject && testsBySubject[0].tests.filter(t => t.category.name === c.name).map(s => {
                            return (
                            <a href={`${s.link}`}><Item key={s.id}>Professor:{s.teacher.name} , Periodo:{s.period.name}</Item></a>
                            )
                        })}
                    </>
                );
            })}
        </Container>
    );
}