// App.jsx
import React from "react";
import PaginatedTable from "./components/PaginatedTable";

const sampleData = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Sam", age: 25 },
  { id: 4, name: "Lisa", age: 30 },
  { id: 5, name: "Mark", age: 27 },
  { id: 6, name: "Sara", age: 29 },
  { id: 7, name: "Paul", age: 31 },
  { id: 8, name: "Anna", age: 26 },
  { id: 9, name: "Tom", age: 33 },
  { id: 10, name: "Emma", age: 24 },
  { id: 11, name: "Alex", age: 35 },
];

function App() {
  return (
    <div>
      <PaginatedTable data={sampleData} />
    </div>
  );
}

export default App;
