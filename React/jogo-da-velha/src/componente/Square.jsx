import { useState } from "react";
import "./App.css";


    function Square({valor, OnSquareClick}){
        return(
            <button className="square" onClick={OnSquareClick}>{valor}
            </button>
        )
    }

export default function Tabuleiro(){

    const [xIsNext, setXIsnext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i){
        if(squares[i] || calculaVencedor(squares))
            return
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsnext(!xIsNext)
    }

    return(
        <>
        <div>
            <Square valor={squares[0]} OnSquareClick={() => handleClick(0)}/>
            <Square valor={squares[1]} OnSquareClick={() => handleClick(1)}/>
            <Square valor={squares[2]} OnSquareClick={() => handleClick(2)}/>          
        </div>
        <div>
            <Square valor={squares[3]} OnSquareClick={() => handleClick(3)}/>
            <Square valor={squares[4]} OnSquareClick={() => handleClick(4)}/>
            <Square valor={squares[5]} OnSquareClick={() => handleClick(5)}/>
        </div>
        <div>
            <Square valor={squares[6]} OnSquareClick={() => handleClick(6)}/>
            <Square valor={squares[7]} OnSquareClick={() => handleClick(7)}/>
            <Square valor={squares[8]} OnSquareClick={() => handleClick(8)}/>
        </div>
        </>
    )
}

function calculaVencedor(squares){
    const lines = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],
                    [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return[a];
        }
    }
    return null;
}