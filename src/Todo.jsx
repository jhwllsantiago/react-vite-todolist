import { useState } from "react";
import EditForm from "./EditForm";

const Todo = ({ onUpdate, onDelete, todo: { id, title, completed } }) => {
  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newTitle) => {
    onUpdate(id, { title: newTitle || title });
    setIsEditing(false);
  };

  const handleToggle = () => {
    onUpdate(id, { completed: !checked });
    setChecked(!checked);
  };

  return (
    <li className="todo">
      {!isEditing && (
        <>
          <input type="checkbox" checked={checked} onChange={handleToggle} />
          <span onClick={handleToggle}>{title}</span>
          <button className="btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
      {isEditing && (
        <EditForm title={title} onSave={handleSave} onCancel={setIsEditing} />
      )}
    </li>
  );
};

export default Todo;
