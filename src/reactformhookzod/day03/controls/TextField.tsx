import React, { type ForwardedRef } from "react";
import type { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | undefined;
  ref: ForwardedRef<HTMLInputElement>;
};

function TextField(props: TextFieldProps) {
  const {
    type = "text",
    id,
    className,
    label,
    ref,
    error,
    disabled,
    ...other
  } = props;

  return (
    <div className="flex-1">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ${className} ${
          disabled ? "cursor-not-allowed bg-gray-100" : ""
        }`}
        ref={ref}
        disabled={disabled}
        {...other}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default TextField;
