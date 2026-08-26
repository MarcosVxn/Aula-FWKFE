import { useEffect, useState } from "react";
import "./App.css";

function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
<div className="relogio-container">
  <div className="relogio">
    <h1>Relógio</h1>
    <p>{time.toLocaleTimeString("pt-BR")}</p>
  </div>
</div>

  );
}

function App() {
  return (
      <Relogio/>
  );
}

export default App;
