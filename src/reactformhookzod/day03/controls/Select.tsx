import React, { type ForwardedRef } from "react";
import type { FieldError } from "react-hook-form";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: FieldError | undefined;
  ref: ForwardedRef<HTMLSelectElement>;
};

function Select(props: SelectProps) {
  const { id, className, label, ref, error, children, ...other } = props;

  return (
    <div className="flex-1">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="paymentMethod"
        ref={ref}
        className={`block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
        {...other}
      >
        {children}
      </select>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Select;
