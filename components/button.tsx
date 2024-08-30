import React, { useState } from "react";

type buttonProps = {
  title: String;
  number: number;
};

const MyButton: React.FC<buttonProps> = ({ title, number }) => {
  const [count, setCount] = useState(number);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{title}</button>
      <div>{count}</div>
    </div>
  );
};

export default MyButton;
