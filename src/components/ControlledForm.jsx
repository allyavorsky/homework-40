import { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Значення, яке контролює React: ${inputValue}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid grey", padding: "8px", margin: "8x 0" }}
    >
      <h2>Controlled Component</h2>
      <label>
        Введіть текст: 
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Надіслати</button>
      <p>
        Поточне значення у стані: <strong>{inputValue}</strong>
      </p>
    </form>
  );
}

export default ControlledForm;
