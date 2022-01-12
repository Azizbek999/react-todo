import React from "react";
import Done from "./Done"

const DoneList = ({ dones, setDones }) => {
  return (
    <div>
      {dones.map((done) => (
        <Done 
        key={done.key} 
        done={done} 
        dones={dones} 
        setDones={setDones} 
        text={done.text} />
      ))}
    </div>
  );
};

export default DoneList;
