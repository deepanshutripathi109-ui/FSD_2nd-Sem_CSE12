import react from "react"
import  "./studentCard.css";

function App(){
  return(
    <div class="box">
    <h2 className="h1">Student Registration form</h2>
    <input type="text" placeholder="Student name" class="input" /><br />
    <input type="text" placeholder="Email" class="input" /><br />
    <input type="password" placeholder="Password" class="input" /><br />
    <input type="text" placeholder="Course" class="input" /><br />
    <input type="number" placeholder="Mobile number" class="input" /><br />
    <button class="button">Register</button>
  </div>
  )
}
export default App;