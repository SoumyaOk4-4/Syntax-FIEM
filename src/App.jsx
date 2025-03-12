//libs
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  //loading time
  useEffect(() => {
    const delayTime = 3000;
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, delayTime);

    return () => clearTimeout(delayLoading);
  }, []);

  //did you knows
  const dyk = "Did You Know:";
  const DYK_arr = [
    dyk + " hello", 
    dyk + " hi", 
    dyk + " bye", 
    dyk + " ok"
  ];

  //did you know random function
  function getRandom_DYK(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  return (
    <div className="App">
      {loading ? ( 
        //loading screen
        <center>
          <br /><br /><br />
          <h4 className="did-you-know">{getRandom_DYK(DYK_arr)}</h4>
          <br /><br />
          <div className="loadingscreen"></div>
        </center>
      ) : (
        <>
          <h1 className="aaa-temp">SYNTAX</h1>
        </>
      )}
    </div>
  );
}

export default App;
