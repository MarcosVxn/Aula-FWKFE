import furadeira from "../img/Furadeira.png"
import macarico from "../img/MacaricoManual.png"
import puncao from "../img/Puncao.png"
import sargento from "../img/Sargento.png"

export const ordensEquipamento = [
    {
        id: 1,
        imagem: sargento,
        equipamento: "Sargento",
        status: "Em Uso",
        funcao: "Suporte de Peça"
    },

    {
        id: 2,
        imagem: puncao,
        equipamento: "Punção de centro",
        status: "Livre",
        funcao: "Marcar furação"
    },

    {
        id: 3,
        imagem: furadeira,
        equipamento: "Furadeira",
        status: "Não tem",
        funcao: "Fazer Furação"
    },
    {
        id: 4,
        imagem: macarico,
        equipamento: "Maçarico de corte manual",
        status: "Em Uso",
        funcao: "Cortar aço"
    }
    
]