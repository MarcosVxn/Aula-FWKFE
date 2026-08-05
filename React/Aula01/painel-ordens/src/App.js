import OrdemCard from "./componentes/OrdemCard";
import { OrdensDeProducao } from "./data/ordens";

function App() {
  return(
    <div style={{ padding: "32px" }}>
      <h1>Painel de Ordens de Produção</h1>
      {OrdensDeProducao.map(ordem =>(
         <OrdemCard key={ordem.id} ordem={ordem}/>
      ))}
      </div>
  );
}

export default App;