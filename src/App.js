import React, { useState , useEffect} from "react";
import useSalary from "./custom";

const App = () => {
  const [count , setCount] = useState(1);
  const handleIncreament = () => {
    setCount(count +1 );
  }
  const handleDecreament = () => {
    setCount(count - 1 );
  }

  useEffect(()=>{
    console.log("use Effect Call")

  });

  const bonus = useSalary();

  return(
    <>
      <h1>Count : {count}</h1>
      <h1>{bonus.salary}</h1>
      <button onClick={bonus.Increament}>Bonus</button>
      <button onClick={handleIncreament}>Increament</button>
      <br />
      <br />
      <br />
      <button onClick={handleDecreament}>Decreament</button>
    </>
  );
}

export default App;