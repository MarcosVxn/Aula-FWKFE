/*Recebe defects e a função onIncrement. Mostra nome/contador e tem um botão "Registrar" que ao ser clidado
chama onIncrement(defect.id), devolvendo o id de volta para cima, até o App. */
import React from 'react';

export default function DefectItem({ defect, onIncrement }) {
    return(
        <div className="defect-item">
            <span className="defect-info">
                {defect.name} - <strong>{defect.count}</strong>
            </span>
            <button
                className="btn-register"
                onClick={() => onIncrement(defect.id)}
            >Registrar</button>
        </div>
    );
}