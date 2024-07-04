import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchNumber = async () => {
      const response = await fetch("/api/getNumber");
      const data = await response.json();
      setNumber(data.number);
    };

    fetchNumber();
  }, []);

  const updateNumber = async (increment) => {
    const response = await fetch("/api/updateNumber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ increment }),
    });
    const data = await response.json();
    setNumber(data.number);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Number Increaser</h1>
      <p>{number}</p>
      <button onClick={() => updateNumber(1)}>+</button>
      <button onClick={() => updateNumber(-1)}>-</button>
    </div>
  );
}
