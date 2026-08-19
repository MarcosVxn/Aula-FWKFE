/*Componente burro (apresentacional): recebe title e exibe um <h1>. Não tem lógica.*/

import React from "react";

export default function Header({ title }) {
    return(
        <hi className="title">{title}</hi>
    )
}