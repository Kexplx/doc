import { createContext, useContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider(props) {
  const [students, setStudents] = useState([]);

  return <StudentContext.Provider value={[students, setStudents]} {...props} />;
}

export function useStudents() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }

  const [students, setStudents] = context;

  const addStudent = (student) => setStudents([...students, student]);

  return [students, setStudents, addStudent];
}
