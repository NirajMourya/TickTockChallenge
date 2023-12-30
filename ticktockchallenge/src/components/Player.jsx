import { useState,useRef } from "react";

export default function Player() {
  const PlayerNameInput = useRef();
  const [PlayerName,setPlayerName] = useState(null);
 
  function handleClick()
  {
      setPlayerName(PlayerNameInput.current.value);
      PlayerNameInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { PlayerName ?? 'unknown entity' }</h2>
      <p>
        <input ref={PlayerNameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
