import React, { useEffect } from "react";
import { useGetFoodQuery, usePostFoodMutation } from "../../app/foodSlice";

function Form() {
  const [postFood, res] = usePostFoodMutation();
  const query = useGetFoodQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = {
      foodName: e.target.foodName.value,
      foodStatus: e.target.foodStatus.value,
    };
    console.log(newFood);
    postFood(newFood);
  };

  useEffect(() => {
    query.refetch();
  }, [res.isLoading]);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col mx-10 gap-5"
    >
      <h1 className="text-center text-2xl mt-10 font-bold">Dish</h1>
      <input
        name="foodName"
        type="text"
        placeholder="Title"
        className="border-2 border-black py-3 px-1"
      />

      <textarea
        name="foodStatus"
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
