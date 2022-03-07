import { useState, useContext } from "react";
import { TodoContext } from "../../context/todos";
import { DefaultBtn } from "../atoms/Button";
import { DefaultInput } from "../atoms/Input";
import { DefaultCard } from "../molecules/Card";

export const Dashboard = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  const addElement = (todo) => {
    const tmp = todos;
    if (tmp.find((el) => el.title === todo)) {
      return setError({ error: true, message: "This todo already exists" });
    }
    tmp.push({ title: todo, done: false });
    setTodos(tmp);
    localStorage.setItem("todos", JSON.stringify(tmp));
    setError({ error: false, message: "" });
    setInputValue("");
  };

  return (
    <DefaultCard>
      <div className="flex flex-col gap-2 ">
        <DefaultInput
          placeholder={"my-item"}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <DefaultBtn
          text={"Add"}
          onClick={(e) => {
            e.preventDefault();
            addElement(inputValue);
          }}
        />
        {error.error && (
          <p className="text-white bg-red text-center rounded py-2">
            {error.message}
          </p>
        )}
      </div>
    </DefaultCard>
  );
};
