import React from "react";

function Card() {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 mt-6 w-full max-w-xl bg-white shadow-md">
      <h1 className="text-base font-bold text-gray-800">Card Title</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        exercitationem tempore facilis enim accusamus voluptatibus dolorum a
        magni totam sint saepe perspiciatis, architecto dignissimos omnis, ipsum
        quaerat numquam natus alias.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Click Me
      </button>
    </div>
  );
}

export default Card;