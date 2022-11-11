import React from 'react';

function App() {
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: "orange"
  }

  var var1 = "Hello world";
  var var2 = 3 + 5;
  var var3 = 19

  function func1() {
    console.log("clicked")
  }
  return (
    <div>
      <h1 style={style1} title="this is the tittle">Heading - JSX METHOD</h1>
      < p id="para1"> This is the paragraph </p >
      < p className="para2"> This is the secong paragraph </p >
      <div>
        <p>{var1 + " " + var2}</p>
        <p>{var3 === 19 ? "True" : "False"}</p>
        <p><label htmlfor="input1">Some data</label>
          <input id="input1" name="input1"></input></p>

        <button onClick={func1}>click me!!!</button>
      </div>
    </div>
  )
}

export default App;