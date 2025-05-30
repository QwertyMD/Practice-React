import React from "react";
import { useForm } from "react-hook-form";

const Education = ({ onBack, onFinish, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10">
      <div className="grid gap-1">
        <label htmlFor="text">Education:</label>
        <input
          type="text"
          {...register("education", {
            required: { value: true, message: "This is a required field" },
          })}
          className="border-2 p-2 rounded-lg"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              education: e.target.value,
            }));
          }}
        />
        {errors.education && (
          <div className="text-red-500">{errors.education.message}</div>
        )}
      </div>
      <div className="flex justify-between">
        <input
          type="button"
          value="Back"
          className="px-4 py-2 bg-sky-500 rounded-lg text-white cursor-pointer"
          onClick={onBack}
        />
        <input
          type="submit"
          value="Finish"
          className="p-2 bg-sky-500 rounded-lg text-white"
        />
      </div>
    </form>
  );
};

export default Education;
