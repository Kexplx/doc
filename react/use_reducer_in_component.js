import { useReducer } from "react";
import "./styles.css";
import { nanoid } from "nanoid";

function reducer(students, action) {
  switch (action.type) {
    case "add":
      return addStudent(students, action.data);
    case "remove":
      return removeStudent(students, action.data);
    case "update":
      return updateStudent(students, action.old, action.new);
    default:
      throw new Error("Invalid action type passed to #reducer");
  }
}

function updateStudent(students, old, newS) {
  const indexOf = students.indexOf(old);

  if (indexOf !== -1) {
    return [
      ...students.slice(0, indexOf),
      newS,
      ...students.slice(indexOf + 1)
    ];
  }

  return students;
}

function addStudent(students, student) {
  return [...students, student];
}

function removeStudent(students, student) {
  const indexOf = students.indexOf(student);

  if (indexOf !== -1) {
    return [...students.slice(0, indexOf), ...students.slice(indexOf + 1)];
  }

  return students;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, ["empty"]);

  return (
    <div className="App">
      <p>{JSON.stringify(state)}</p>
      <button onClick={() => dispatch({ type: "add", data: "new" })}>
        dispatch "one"
      </button>
      <button onClick={() => dispatch({ type: "remove", data: "new" })}>
        dispatch "two"
      </button>
      <button
        onClick={() => dispatch({ type: "update", old: "new", new: "updated" })}
      >
        update "two"
      </button>
    </div>
  );
}
