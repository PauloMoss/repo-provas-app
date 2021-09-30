import { useState } from "react";
import styled from "styled-components";
import ExamCategory from "../components/ExamCategory";

export default function ListItem({ title, exams, examsCategories }) {
  const [expanded, setExpanded] = useState(false);
  const amount = exams.length;

  return (
    <>
      <Title>
        <div className="title">
          {title} {amount !== undefined && `(${amount})`}
        </div>
        <ToggleButton onClick={() => setExpanded(!expanded)} />
      </Title>
      {expanded &&
        examsCategories.map((ec) => (
          <ExamCategory key={ec.id} name={ec.name} exams={exams} examCategory={ec} />
        ))}
    </>
  );
}

const Title = styled.div`
  padding: 20px 14px;
  width: 100%;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .title {
    position: relative;
    top: 2px;
  }
`;

const ToggleButton = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.25s ease-out;
  }
  &::before {
    top: 0;
    left: 50%;
    width: 3px;
    height: 100%;
    margin-left: -2px;
  }
  &::after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    margin-top: -2px;
  }
`;
