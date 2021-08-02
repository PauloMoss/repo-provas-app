import React from "react";
import ReactModal from 'react-modal';
import styled from 'styled-components';
import ClickAwayListener from 'react-click-away-listener';

ReactModal.setAppElement("body");

export default function Modal({ modalIsOpen, setModalIsOpen, testLink }) {

  return (
    <ModalStyle isOpen={modalIsOpen} testLink={testLink}>

        <a href={testLink.link} target="_blank" rel="noreferrer"><button>Open in new tab</button></a>

        <ClickAwayListener onClickAway={() => setModalIsOpen(!modalIsOpen)} >
            <object data={testLink.link} width="100%" height="100%" title={testLink.id}></object>
        </ClickAwayListener>

    </ModalStyle>
  );
}

const ModalStyle = styled(ReactModal)`
    width:100%;
    height: 100vh;
    padding: 30px;
    background-color: #333333;
    position: fixed;
    top:0;
    left:0;
    z-index: 50;

    button {
      font-weight: 700;
      padding:10px 20px;
      margin-bottom: 10px;
      background-color: #A328D6;
      color: #FFFFFF;
      border:none;
      border-radius: 5px;
    }
`;