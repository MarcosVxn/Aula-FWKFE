import './ListaDeTarefa.css'

function ListaDeTarefas({ tarefas }) {
  return (
    <div>
      {tarefas.length > 0 ? (
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa para exibir.</p>
      )}
    </div>
  );
}

export default ListaDeTarefas;