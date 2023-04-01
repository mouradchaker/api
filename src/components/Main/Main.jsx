import React from "react";
import { useGetFoodQuery } from "../../app/foodSlice";

function Main() {
  const { data } = useGetFoodQuery();
  const handleClick = (_id) => {
    console.log(_id);
  };
  return (
    <>
      {data?.map((food) => (
        <div className="mt-10 border-2 mx-10 border-black py-6 pl-2">
          <h1>Titel : {food.foodName} </h1>
          <p>Discreption : {food.foodStatus} </p>

          <div className="flex justify-end mr-2">
            <button
              onClick={() => handleClick(food._id)}
              className="border-2 border-black p-1 mt-10 "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Main;
