

export default function ControlesGerais({onZerarPlacar}){
    return(
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
            <button onClick={onZerarPlacar}>Zerar Pontuação</button>
           
        </div>
    )
}