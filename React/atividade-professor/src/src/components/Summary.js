/*Recebe totalDefects (já calculado no App) e decide o que exibir: msg vazia se 0, ou total. */

import React from "react";

export default function Summary({ totalDefects }) {
    if (totalDefects === 0) {
        return(
            <div className="summary-container summary-empty">
                Nenhum defeito registrado até o momento.
            </div>
        );
    }
    return (
        <div className="summary-container summary-active">
            Total de defeitos registrados: {totalDefects}
        </div>
    );
}