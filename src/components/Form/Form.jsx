import React from "react";

function Form() {
  return (
    <form className="flex flex-col mx-10 gap-5">
      <h1 className="text-center text-2xl mt-10 font-bold">Dish</h1>
      <input
        type="text"
        placeholder="Title"
        className="border-2 border-black py-3 px-1"
      />

      <textarea
        placeholder="Discreption"
        className="border-2 border-black py-6 px-1"
      ></textarea>

      <button className="border-2 border-black" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
