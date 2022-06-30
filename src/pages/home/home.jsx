import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userTodo = useSelector((state) => state.todos);
  //console.log(userTodo)

  return (
    <div className="container">
      <h1 className="text-center">Home</h1>

    </div>
  );
};

export default Home;
