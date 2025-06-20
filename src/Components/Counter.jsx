import React from "react";
import { useState } from "react";


function Counter(){
    let [count, setCount] = useState(0);
    return(
        <div id="main">
        <img className="led" src="/Assets/led.jpg" alt="" />
        
        <div className="screen">
             <h6  style={{ fontSize: '20px' }}>Kindly wait for your number</h6>
             <h1  style={{ fontSize: '120px' }}>{count}</h1>
      </div>

        <div className="buttons">
              <button className="btn" style={{backgroundColor: 'green'}} onClick={() => setCount(count + 1)}>Increament</button>
              <button className="btn" style={{backgroundColor: 'red'}} onClick={() => count > 0 && setCount(count - 1)}>Decreamnet</button>
              <button className="btn" style={{backgroundColor: 'Teal'}} onClick={() => setCount(count = 0)}>Reset</button>
              <button className="btn" style={{backgroundColor: 'blue'}} onClick={() => { let n = +prompt("Write Number"); setCount(n < 0 ? -n : n); }}>Write Number</button>
        </div>
      
     </div>

    );
}

export default Counter;
