import type { NextPage } from "next";
import { useStore } from "../store/storeHooks";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <main>
      <Form />
      <Transitions />
    </main>
  );
};

const Form = () => {
  const store = useStore();
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        store.addTodo(message);
        setMessage("");
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="message"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

// We need observer where we need to react to changes from the context state
const Transitions = observer(() => {
  const store = useStore();

  return (
    <div>
      <h2>Pending Transactions</h2>
      {store.todos.length > 0 && (
        <ul className="pending">
          {store.todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <button onClick={() => store.removeTodo(todo)}>remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default Home;
