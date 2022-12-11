import React, { useState } from "react";

export default function Joke(props) {
    const[isShown,setIsshown] = useState(false)
    function toggleShown(){
        setIsshown(prevShown => !prevShown)
    }
  return (
    <div className="jokes">
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {isShown && <p>punchline: {props.punchline}</p>}
      <button onClick={toggleShown}>{isShown ?"Hide" :"Show"} Punchline</button>
      <hr />
    </div>
  );
}
