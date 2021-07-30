import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Button } from './Styles';

export default function Home() {

    
    /*useEffect(()=>{
        const request = axios.get('http://localhost:4000/tests_params', body);
        request.then((r) => {
            setUserProfile(r.data);
        })
        request.catch(erro => {
            alert(erro.response.status)
        })
        // eslint-disable-next-line
    }, [])*/

    return (
        <Container>
            <Link to="/send_test"><Button>enviar prova</Button></Link>
            <Link to="/subjects"><Button>provas por disciplina</Button></Link>
        </Container>
    );
}