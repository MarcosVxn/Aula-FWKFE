import { useState } from 'react';
import '../App.css';

function Curtida() {
  const [like, setLike] = useState(0);

  return (
    <div>
      <button onClick={() => setLike(like + 1)}>
        Curtir {like}
      </button>

      {like > 5 && (
        <div className="like-limit">
          <p>Você atingiu o limite de curtidas!</p>
        </div>
      )}
    </div>
  );
}

export default Curtida;