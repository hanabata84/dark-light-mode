import React, { useState } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [isToggle, setIsToggle] = useState(false)
  const onToggle = () => setIsToggle(!isToggle)

  const lightStyles = {
    backgroundColor: isToggle ? "#282D35" : "white",
    color: isToggle ? "aliceblue" : "#2B283A"
  }

  return (
    <div style={lightStyles} className="App">
      <Navbar onToggle={onToggle} toggleState={isToggle} />
      <Main toggleState={isToggle} />
    </div>
  );
}

export default App;
