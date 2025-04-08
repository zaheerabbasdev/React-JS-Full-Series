import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset, incrementByAmount } from "./features/counter/CounterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleincrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementbyAmount(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <button onClick={handleincrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>

      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>

      {/* how to use payload */}
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncrementbyAmount}>Increment by Amount </button>
    </div>
  );
}

export default App;
