import React, { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const contactUsFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 chars"),
  email: z.string().email("Invalid email address"),
  // age: z.preprocess(
  //   (val) => (val === "" ? undefined : Number(val)),
  //   z.number().min(18, "You must be at least 18 years old").optional()
  // ),
  dob: z.date().refine(
    (val) => {
      const age = new Date().getFullYear() - new Date(val).getFullYear();
      return age >= 18;
    },
    {
      message: "You must be at least 18 years old",
    }
  ),
  topic: z
    .string()
    .refine((val) => val !== "", { message: "Topic is required" })
    .refine((val) => ["Support", "Sales", "Others"].includes(val), {
      message: "Invalid topic",
    }),
  message: z.string().min(10, "Message too short"),
  subscribe: z.boolean(),
});

type ContactUsFormInputs = z.infer<typeof contactUsFormSchema>;

function ContactUsFormWithOtherLibrary() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactUsFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      dob: undefined,
      topic: "",
      message: "",
      subscribe: true,
    },
  });

  const dobWatch = watch("dob");
  const age = dobWatch
    ? new Date().getFullYear() - new Date(dobWatch).getFullYear()
    : undefined;

  const onSubmit = async (data: ContactUsFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Form Data::> ", JSON.stringify(data));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-5 space-y-3 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border text-sm text-gray-900 border-gray-500 rounded px-2 py-1"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border text-sm text-gray-900 border-gray-500 rounded px-2 py-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold">Age</label>
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <DatePicker
                value={field.value ? dayjs(field.value) : null}
                onChange={(val) => field.onChange(val ? val.format("YYYY-MM-DD") : undefined)}
              />
            )}
          />
          {age ? <p>Your Age: {age}</p> : null}
          <div className="min-h-[20px]">
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob.message}</p>
            )}
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold">Topic</label>
          <select
            {...register("topic")}
            className="w-full border text-sm text-gray-900 border-gray-500 rounded px-2 py-1"
          >
            <option value="">Select Topic</option>
            <option value="Support">Support</option>
            <option value="Sales">Sales</option>
            <option value="Others">Others</option>
          </select>
          {errors.topic && (
            <p className="text-red-500 text-sm">{errors.topic.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold">Message</label>
        <textarea
          {...register("message")}
          placeholder="Write your message here..."
          className="w-full border text-sm text-gray-900 border-gray-500 rounded px-2 py-1"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="subscribe"
          {...register("subscribe")}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="subscribe"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Send me updates
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {isSubmitSuccessful && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Thanks!</span> Your message was
          submitted.
        </div>
      )}
    </form>
  );
}

export default ContactUsFormWithOtherLibrary;
