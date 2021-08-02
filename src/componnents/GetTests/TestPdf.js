import {  useContext, useState } from 'react';

import TestContext from '../../context/TestContext';
import Modal from './Modal';

export default function TestPdf() {

    const { testLink } = useContext(TestContext);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return(
        <div>
            < Modal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                testLink={testLink}
            />
            
        </div>
    );
}