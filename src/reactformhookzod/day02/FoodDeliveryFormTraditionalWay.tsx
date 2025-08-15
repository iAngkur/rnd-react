import React, { type ChangeEvent, type FormEvent } from "react";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

type FoodDeliveryFormErrorType = {
  customerName: string;
  mobile: string;
};

function FoodDeliveryForm() {
  const [values, setValues] = React.useState<FoodDeliveryFormType>({
    customerName: "",
    mobile: "",
  });

  const [errors, setErrors] = React.useState<FoodDeliveryFormErrorType>({
    customerName: "",
    mobile: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateFormData = () => {
    let tempErrors: FoodDeliveryFormErrorType = {
      customerName: "",
      mobile: "",
    };

    if (!values.customerName) {
      tempErrors.customerName = "Customer name is required";
    }

    if (!values.mobile) {
      tempErrors.mobile = "Mobile number is required";
    }

    setErrors(tempErrors);

    return Object.values(tempErrors).every((val) => val === "");
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) {
      console.log("Form data: ", { ...values });
    } else {
      console.log("Form is invalid!");
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleOnSubmit}
      className="max-w-sm mx-auto"
    >
      <div className="mb-5">
        <label
          htmlFor="customerName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Customer Name
        </label>
        <input
          name="customerName"
          id="customerName"
          value={values.customerName}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
        {errors.customerName && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.customerName}
          </p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="mobile"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mobile
        </label>
        <input
          name="mobile"
          id="mobile"
          value={values.mobile}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.mobile && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.mobile}
          </p>
        )}
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

export default FoodDeliveryForm;
