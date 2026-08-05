const OrdemCard = ({ ordem }) => {
    const corStatus = {
        "Em andamento": "orange",
        "Concluída": "green",
        "Pendente": "red"
    };

    return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        <h3>{ordem.produto}</h3>
        <p>Status: <strong style ={{color: corStatus[ordem.status] }}>{ordem.status}</strong></p>
    </div>
    );
};

export default OrdemCard;