import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import goku from "./assets/goku.png";
import goku2 from "./assets/goku2.png";
import kame from "./assets/kame.png";
import dbz from "./assets/dbz.mp3";
import "./App.css";
import Adds from "./AddsBaner";

function App() {
  const [Getvoto, setVoto] = useState(0);

  return (
    <>
    <Adds/>
      <audio autoPlay controls >
        <source src={dbz} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
      <div className="Containerprimary">
        <label className="votos">
          Votos Actuales:<label id="numeros">10,392</label>
        </label>
        <div className="Subcontainer">
          <article>
            {Getvoto == 0 ? (
              <img src={goku} alt="" id="goku" />
            ) : (
              <img src={goku2} alt="" id="goku" />
            )}
          </article>
          <article className="titulo">
            <label>Goku </label>
            <br />
            <label id="presidente">presidente</label>
            <br />
            <span className="texto">
              Erradicando la maldad con un Kame Hame
            </span>
            <br />
            <img src={kame} alt="" />
            <br />
            <button className="buttonvotar" onClick={()=>setVoto(5)}>{Getvoto == 0?"Cuenta con mi voto":"Gracias terricola"} </button>
          </article>
          <article>2024-2028</article>
        </div>
      </div>
    </>
  );
}

export default App;
