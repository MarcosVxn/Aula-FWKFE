/*Recebe defects e onIncrement do App e apenas repassa item por item para o DefectItem, usando .map() com 
Key={defect.id}. Não tem estado próprio, é um "intermediário" que distribui os dados.*/

import React from "react";
import DefectItem from "./DefectItem";

export default function DefectList({ defects, onIncrement }) {
    return(
        <div className="defect-list">
            {defects.map((defect) => (
                <DefectItem
                 key={defect.id}
                 defect={defect}
                 onIncrement={onIncrement}
                /> 
            ))}
        </div>
    );
}

