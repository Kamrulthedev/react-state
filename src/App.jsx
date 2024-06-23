import TodoProvider from "./context/todoProvider";

function App() {
  return (
    <>
      <div ><CounterWithClassCompunent></CounterWithClassCompunent></div>
      <div><CounterWithFunCompunent></CounterWithFunCompunent></div>

    <TodoProvider>


    </TodoProvider>
    </>
  );
}

export default App;
