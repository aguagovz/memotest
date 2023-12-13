import "./Memocard.css";
import { useState, useEffect } from "react";
import fragezeichen from "../../assets/images/furniture/fragezeichen.jpg";

export default function Memocard({ title, image, shouldReset }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const checkIfReset = () => {
    if (shouldReset) {
      setIsRevealed(false);
    }
  };
  useEffect(() => checkIfReset(), [title, image]);

  return (
    <div className="Memocard" onClick={() => setIsRevealed(!isRevealed)}>
      {isRevealed ? (
        <>
          {title && <p className="text">{title}</p>}
          {image && <img className="Memocard-img" src={image} />}
        </>
      ) : (
        <img className="Memocard-img" src={fragezeichen} />
      )}
    </div>
  );
}

/* isRevealed = variable; setIsRevealed = setter, funcion para cambiar estado de variable*/
/* [un valor, lo que le cambia el valor a ese estado] */

/* useEffect(() => {console.log("culo");}, []); */
/* primer parametro: acción (función) que quiero que se ejecute
     segundo parametro: array de dependencias.
     si está vacío, la funcion del primer parámetro se ejecuta 
     solamente la primera vez que se cargue ese componente
     si al array le pongo variables que quiero que observe, 
     la función del primer parámetro se ejecuta cada vez que la variable cambie */
