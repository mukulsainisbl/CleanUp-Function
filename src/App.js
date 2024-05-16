
import { useState } from 'react';
import './App.css';

import Timer from './components/Timer';



function App() {
  const [showTimer,setShowTimer] = useState(true)



  return (
    <div>
{showTimer ? <Timer/> :  null}
<button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>

  

    </div>
  );
}

export default App;
