import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Значення, зчитане напряму з DOM: ${inputRef.current.value}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid grey", padding: "8px", margin: "8px 0" }}
    >
      <h2>Uncontrolled Component</h2>
      <label>
        Введіть текст:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Надіслати</button>
    </form>
  );
}

export default UncontrolledForm;
