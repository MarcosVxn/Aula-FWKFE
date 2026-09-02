import {useState, useEffect} from 'react';
import './App.css';


function Curtida() {
const [like, setLike] = useState(0);

useEffect(() => {
  if(like > 5){
    return(
        <div className="like-limit">
            <p>Você atingiu o limite de curtidas!</p>
        </div>
    );
  }
}, [like]);

return (
    <button onClick={() => setLike(like + 1)}>
        Curtir {like}
    </button>
);    

}


export default Curtida;