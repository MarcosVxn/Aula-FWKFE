import { useState, useEffect } from "react";

function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setVisivel(false);
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, []);

  return (
    <>
      {visivel && <h1>Bem-vindo!</h1>}
    </>
  );
}

export default AvisoTemporizado;