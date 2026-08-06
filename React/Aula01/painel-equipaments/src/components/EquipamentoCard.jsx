const EquipamentosCard = ({ card }) => {
    const corStatus = {
        "Em Uso": "yellow",
        "Não tem": "red",
        "Livre": "green"
    }

    return (
        <div style ={{ border: "1px solid #CBD5E1", padding: "16px", borderRadius: "8px", margin: "5px", backgroundColor: "#7087A6"}}>
            <h3 style= {{ color: "white"}}>{card.equipamento}</h3>
            <img src={card.imagem} alt={card.equipamento} 
            style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                border: "1px solid #CBD5E1"
            }}
            />
            <p style= {{ color: "white"}}>Status: <strong style ={{color: corStatus[card.status] }}>{card.status}</strong></p>
            <p style= {{ color: "white"}}>Função: {card.funcao}</p>
        </div>
    );
};

export default EquipamentosCard;