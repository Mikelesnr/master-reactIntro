import React from 'react';
import Detail from './Detail';
import Clscom from './Clscom';

function App(props) {
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: "orange"
  }

  return (
    <div>
      <h1 style={style1} title="this is the tittle">Heading - JSX METHOD</h1>
      <h2>
        {props.children}
      </h2>
      < p id="para1"> This is the paragraph </p >
      < p className="para2">these are the {props.contentdata}</p >
      <h2>The nested class components starts from here</h2>
      <Detail ram="16Gb" hdd="2TB" processor="core i7" />
      <Detail ram="8Gb" hdd="1TB" processor="core i5" />
      <Detail hdd="520Gb" ram="16B" processor="core i3" />

      <Clscom contentdata="Props data for Clscom" newcomponent="this is some more class data">some data from the children</Clscom>

    </div>
  )
}

export default App;