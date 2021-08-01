import { Link } from 'react-router-dom';

import { Container, Button } from './Styles';

export default function Home() {

    return (
        <Container>
            <h1>RepoProvas</h1>
            <Link to="/send_test"><Button>enviar prova</Button></Link>
            <Link to="/subjects"><Button>provas por disciplina</Button></Link>
            <Link to="/teachers"><Button>provas por professores</Button></Link>
        </Container>
    );
}