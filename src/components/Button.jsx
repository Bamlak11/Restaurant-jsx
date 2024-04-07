import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-blue-400 text-blue-200  hover:bg-blue-500 bg-blue-800 hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;