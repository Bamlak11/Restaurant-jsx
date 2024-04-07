import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-orange-600 text-orange-50  hover:bg-orange-400 bg-orange-500 hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;