import { createContext } from "react";
import { useState } from "react";

const ExamContext = createContext();

export default ExamContext;

export function ExamProvider({ childen }) {
  const [testLink, setTestLink] = useState(null);

  return (
    <ExamContext.Provider value={{ testLink, setTestLink }}>
      {childen}
    </ExamContext.Provider>
  );
}
