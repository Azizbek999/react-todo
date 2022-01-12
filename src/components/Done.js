import React from "react";

const Done = ({ text, dones, setDones, done }) => {
  const deleteHandler = () => {
    setDones(dones.filter((el) => el.id !== done.id));
  };

  return (
    <div>
      <h1>This is Done</h1>
      <h1>{text}</h1>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
};

export default Done;
