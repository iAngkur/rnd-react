import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface LoginFormInputs {
//   email: string;
//   password: string;
// }

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password too short" }),
  age: z.preprocess((val) => {
    const parsed = Number(val);
    return isNaN(parsed) ? NaN : parsed;
  }, z.number().min(18, { message: "Must be 18 or older" }).int({ message: "Age must be an integer" })),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const BasicReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      age: 18,
    },
  });

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          // {...register("email", { required: "Email is required" })}
          {...register("email")}
          className="w-full outline-none border border-gray-300 rounded-md p-2"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          // {...register("password", {
          //   required: "Password is required",
          //   minLength: {
          //     value: 6,
          //     message: "Password must be at least 6 characters long",
          //   },
          // })}
          className="w-full outline-none border border-gray-300 rounded-md p-2"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors?.password?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium">
          Age
        </label>
        <input
          id="age"
          type="number"
          {...register("age")}
          className="outline-none border border-gray-300 rounded-md p-2"
        />
        {errors.age && (
          <span className="block text-red-500 text-sm">
            {errors.age.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-md p-2"
      >
        Login
      </button>
    </form>
  );
};

export default BasicReactHookForm;
