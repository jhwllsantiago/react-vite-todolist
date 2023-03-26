import { useState } from "react";

const AddForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = () => {
    onSubmit(title);
    setTitle("");
  };

  return (
    <div className="form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.trimStart())}
        placeholder={"add new todo"}
      />
      {title && <button onClick={handleSubmit}>Add</button>}
    </div>
  );
};

export default AddForm;
