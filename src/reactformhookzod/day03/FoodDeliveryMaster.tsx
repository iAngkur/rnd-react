import { useFormContext, useFormState } from "react-hook-form";
import TextField from "./controls/TextField";

export type FoodDeliveryMasterType = {
  customerName: string;
  mobile: string;
  email: string;
};

function FoodDeliveryMaster() {
  const {
    register,
    // formState: { errors },
  } = useFormContext<FoodDeliveryMasterType>();

  const { errors } = useFormState<FoodDeliveryMasterType>({
    name: ["customerName", "mobile", "email"],
  }); // It is used to prevent other form fields/components from being re-renderred

  return (
    <fieldset className="mb-5 fieldset bg-base-200 border-gray-300 rounded-box w-full border p-4">
      <legend className="fieldset-legend text-sm font-medium text-gray-400 dark:text-white">
        Customer Information
      </legend>
      <div className="mb-5 flex justify-between gap-4">
        <TextField
          id="customerName"
          label="Customer Name"
          placeholder="Enter name"
          error={errors?.customerName}
          {...register("customerName", {
            required: "Customer name is required",
            minLength: {
              value: 3,
              message: "Customer name must be at least 3 characters",
            },
            maxLength: {
              value: 15,
              message: "Customer name must not exceed 15 characters",
            },
          })}
        />
      </div>
      <div className="mb-5 flex justify-between gap-4">
        <TextField
          id="mobile"
          label="Mobile No"
          error={errors.mobile}
          placeholder="+880 1234 567"
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid mobile number",
            },
          })}
        />
        <TextField
          id="email"
          label="Email"
          error={errors.email}
          placeholder="abc@test.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            validate: {
              notBlockEmail: (value) => {
                return (
                  value !== "email@gmail.com" || "Particular email is blocked"
                );
              },
              notFromBlackList: (value) => {
                return (
                  !value.endsWith("xyz.com") ||
                  "Particular email is from blacklisted domain"
                );
              },

              notContainCustomerName: (value, values) => {
                return (
                  !value.includes(values.customerName) ||
                  "Email cannot contain customer name"
                );
              },
            },
          })}
        />
      </div>
    </fieldset>
  );
}

export default FoodDeliveryMaster;
