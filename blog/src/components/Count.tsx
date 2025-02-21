import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <p className="text-2xl">{count}</p>
      <button
        onClick={() => setCount((prev) => ++prev)}
        className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
      >
        Click me
      </button>
    </div>
  );
};
