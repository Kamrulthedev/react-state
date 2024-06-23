import { useState } from "react";

const CounterWithFunCompunent = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  return <button onClick={() => setCount((preve) => preve + 1)}>{count}</button>;

};


export default CounterWithFunCompunent;