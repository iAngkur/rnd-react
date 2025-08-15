import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

function FoodDeliveryFormRHK() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    // mode: "onSubmit", // The error valiation will be checked on submit
    mode: "onChange", // The error valiation will be checked on every change
    // reValidateMode: "onChange", // The error valiation will be checked on every change
    // shouldFocusError: true, // Focus on the error input field
    // delayError: 1000, // Delay the error validation by 1 second
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (data: FoodDeliveryFormType) => {
    console.log("Form data: ", { ...data });
  };

  const onError = (errors: any) => {
    console.log("Form errors: ", { ...errors });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-sm mx-auto mt-12"
    >
      <div className="flex justify-between gap-4">
        <div className="mb-5 flex-1">
          <label
            htmlFor="orderNo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            #Order No.
          </label>
          <input
            id="orderNo"
            {...register("orderNo")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-500 disabled:dark:bg-gray-700 disabled:dark:border-gray-600 disabled:dark:text-gray-400"
            disabled
          />
          {errors.orderNo && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.orderNo.message}
            </p>
          )}
        </div>
        <div className="mb-5 flex-1">
          <label
            htmlFor="customerName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Customer Name
          </label>
          <input
            id="customerName"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          {errors.customerName && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.customerName.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="mb-5 flex-1">
          <label
            htmlFor="mobile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mobile
          </label>
          <input
            id="mobile"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.mobile && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.mobile.message}
            </p>
          )}
        </div>
        <div className="mb-5 flex-1">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
              validate: {
                notBlockEmail: (value) => {
                  // if (value === "email@gmail.com") {
                  //   return "Particular email is blocked";
                  // }
                  // return true;

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
            placeholder="Enter email address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default FoodDeliveryFormRHK;
