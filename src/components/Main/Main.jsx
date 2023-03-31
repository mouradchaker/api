import React from "react";
import { useGetFoodQuery } from "../../app/foodSlice";

function Main() {
  const { data } = useGetFoodQuery();

  return (
    <div className="mt-10 border-2 mx-10 border-black py-6 pl-2">
      <h1>Titel : Chawarma</h1>
      <p>Discreption : Good food</p>

      <div className="flex justify-end mr-2">
        <button className="border-2 border-black p-1 mt-10 ">Remove</button>
      </div>
    </div>
  );
}

export default Main;
