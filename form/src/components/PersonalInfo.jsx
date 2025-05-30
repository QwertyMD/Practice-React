import React from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ onNext, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-1">
        <label htmlFor="text">Username:</label>
        <input
          type="text"
          placeholder="sample@gmail.com"
          {...register("username", {
            required: { value: true, message: "Username is required!" },
          })}
          className="border-2 p-2 rounded-lg"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              username: e.target.value,
            }));
          }}
        />
        {errors.username && (
          <div className="text-red-500">{errors.username.message}</div>
        )}
      </div>
      <div className="grid gap-1">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
          className="border-2 p-2 rounded-lg"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }));
          }}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Next"
          className="px-4 py-2 bg-sky-500 rounded-lg text-white cursor-pointer"
        />
      </div>
    </form>
  );
};

export default PersonalInfo;
