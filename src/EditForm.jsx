import { useState } from "react";

const EditForm = ({ title, onSave, onCancel }) => {
  const [newTitle, setNewTitle] = useState(title);
  return (
    <>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value.trimStart())}
        autoFocus={true}
      />
      <button className="btn" onClick={() => onSave(newTitle)}>
        Save
      </button>
      <button onClick={() => onCancel(false)}>Cancel</button>
    </>
  );
};

export default EditForm;
