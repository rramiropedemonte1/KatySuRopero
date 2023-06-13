import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button className="button1" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span className="span1">{count}</span>
      <button className="button1" disabled={count >= stock} onClick={increment}>
        +
      </button>
      <div>
        <button
          className="button2"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
