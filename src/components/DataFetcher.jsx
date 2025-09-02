import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Завантаження даних...</div>;
  }

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  return (
    <div
      style={{ border: "1px solid grey", padding: "8px", margin: "8px 0" }}
    >
      <h2>Список користувачів з сервера</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
