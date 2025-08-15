import Select from "./controls/Select";
import { useFormContext, useFormState } from "react-hook-form";

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: string;
};

function CheckoutForm() {
  const {
    register,
    // formState: { errors },
  } = useFormContext<CheckoutFormType>();

  const { errors } = useFormState<CheckoutFormType>({
    name: ["paymentMethod", "deliveryIn"],
  });

  return (
    <fieldset className="mb-5 fieldset bg-base-200 border-gray-300 rounded-box w-full border p-4">
      <legend className="fieldset-legend text-sm font-medium text-gray-400 dark:text-white">
        Checkout Details
      </legend>
      <div className="flex justify-between gap-5">
        <Select
          id="paymentMethod"
          label="Payment Method"
          error={errors.paymentMethod}
          {...register("paymentMethod", {
            required: "Payment method is required",
          })}
        >
          <option value="">Choose a payment method</option>
          <option value="online">Paid Online</option>
          <option value="COD">Cash on Delivery</option>
        </Select>
        <Select
          id="deliveryIn"
          label="Delivery Within"
          {...register("deliveryIn")}
        >
          <option value="">Choose a deliver time</option>
          <option value="1">1 hour</option>
          <option value="2">2 hour</option>
        </Select>
      </div>
    </fieldset>
  );
}

export default CheckoutForm;
