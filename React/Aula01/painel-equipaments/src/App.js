import EquipamentosCard from "./components/EquipamentoCard";
import  { ordensEquipamento } from "./data/ordensEquipamento";

function App() {
  return(
    <body style = {{ backgroundColor: "#4A5568" }}>
     <div style ={{ padding: "36px"}}>
        <h1 style = {{  textAlign: "center", color: "white" }}>Painel de Equipamentos</h1>
        {ordensEquipamento.map(card =>(
          <EquipamentosCard key = {card.id} card = {card}/>
        ))}
     </div>
    </body>

  );
}

export default App;
