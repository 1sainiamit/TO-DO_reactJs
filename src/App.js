import React, { useState } from "react";
import "./App.css";
// Custom Hooks - To make the use of logic Reusable or DRY(Don't repeat yourself)

import useList from "./custom-hooks/useList";
export default function App() {
  //Using CUSTOM HOOKS

  const { list, push, pull } = useList();
  const [todo, setTodo] = useState("");

  const onsubmithandler = (event) => {
    event.preventDefault();
    if (todo !== "") {
      push(todo);
      setTodo(""); //Reseting the input value text again to empty
    } else {
      alert("Please type something to add");
    }
  };
  return (
    <>
      <div>
        <header>
          <form
            id="form_id"
            onSubmit={(event) => {
              onsubmithandler(event);
            }}
          >
            <label id="ui2">Add Todo Items: </label>
            <input
              id="ui3"
              type="text"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
            <button id="add_button" type="submit">
              Add
            </button>
          </form>

          <h5>
            {list.map((listItem, listIndex) => {
              return (
                <>
                  {/* Mapping the Added Elements in List */}

                  <li id="ui" key={listIndex}>
                    {" "}
                    {listItem}{" "}
                  </li>

                  {/* Remove Button */}
                  <button
                    id="remove_button"
                    onClick={() => {
                      pull(listIndex);
                    }}
                  >
                    Remove
                  </button>
                </>
              );
            })}
          </h5>
        </header>
      </div>
    </>
  );
}