import React from "react";

const Button = ({ text , classname }) => {
  return (
    <button className={`Theem-button mt-4 ${classname}`}  >
      {text}
    </button>
  );
};


export default Button;
