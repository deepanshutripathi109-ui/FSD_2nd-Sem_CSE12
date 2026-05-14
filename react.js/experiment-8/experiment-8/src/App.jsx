import{useState} from 'react'
function GameScore(){
  const [count,setCount]=useState(0);
  //increment function
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  return(
    <div>
      <h1>
        current score:{count}
      </h1>
      <button onClick={()=>setScore(score+1)}>Score a point</button>
    </div>
  );
}
export default GameScore;