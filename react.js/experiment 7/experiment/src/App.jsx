import  "./StudentCard.css";
import  StudentCard  from "./StudentCard.jsx";
function App() {
  return (
    <div>
      <h1>Student Information Card</h1>
      <StudentCard name="Devansh Pandey" marks={95} grade="A" />
      <StudentCard name="John Doe" marks={85} grade="B" />  
      <StudentCard name="Jane Smith" marks={78} grade="C" />

    </div>
  );
}

export default App;