import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="container w-25">
      {todos.length > 0 ? (
        todos.map((item, i) => {
          return (
            <div key={i} className="mb-3">
              <div className="border m-auto">
                <h6 className="mx-5 my-2">{item.title}</h6>
                <p className="mx-5">{item.content}</p>
              </div>
              <button
                className="btn btn-danger d-block ms-auto mt-2"
                onClick={() => removeTodo(i)}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h2 className="text-center">Todo is Empty ...</h2>
      )}
    </div>
  );
};

export default TodoList;

