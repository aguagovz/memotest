//props entre llaves
import "./MemocardGrid.css";
import Memocard from "../Memocard/Memocard";

export default function MemocardGrid({ memocardlist, shouldReset }) {

  return (
    <div className="container">
      {memocardlist.map((card) => (
        /*ENVUELTO EN UN REACT FRAGMENT porque...*/
        <>
          {card.title && (
            <Memocard
              shouldReset={shouldReset}
              id={card.id}
              title={card.title}
            />
          )}
          {card.image && (
            <Memocard
              shouldReset={shouldReset}
              id={card.id}
              image={card.image}
            />
          )}
        </>
        /*... en un return no puedo devolver más de un nodo de html sueltos, tiene que haber un elemento que agrupe*/
      ))}
    </div>
  );
}
