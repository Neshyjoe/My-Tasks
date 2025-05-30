import React from "react";

export const TaskList = ({tasks, headingText, handleTaskEdit, handleTaskDelete}) => {

  console.log("BLABLABLABLA", tasks)

  return (
    <div className="task--list">
      <h2>{headingText}</h2>
      <ul style={{border: '1px solid black', padding: '10px', borderRadius: '5px'}}>
       {
        tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", justifyContent:'center', alignItems: "center", gap: "10px" }}>
          <p>{task.title}</p>
          <p>{task.time}</p>
          <div style={{ display: "flex",  justifyContent:'center', alignItems: "center", gap: "10px" }}>
            <button onClick={() => handleTaskEdit(task)}>Edit</button>
            <button onClick={() => handleTaskDelete(task)}>Delete</button>
          </div>
        </li>
        ))
       }
      </ul>
    </div>
  );
};
