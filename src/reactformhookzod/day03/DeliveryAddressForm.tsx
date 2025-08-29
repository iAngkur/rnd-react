import TextField from "./controls/TextField";
import { useFormContext, useFormState } from "react-hook-form";

export type DeliveryAddressFormType = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

function DeliveryAddressForm() {
  const {
    register,
    // formState: { errors },
  } = useFormContext<{ address: DeliveryAddressFormType }>();

  const { errors } = useFormState<{ address: DeliveryAddressFormType }>({
    name: "address",
  });

  return (
    <fieldset className="mb-5 fieldset bg-base-200 border-gray-300 rounded-box w-full border p-4">
      <legend className="fieldset-legend text-sm font-medium text-gray-400 dark:text-white">
        Delivery Address
      </legend>
      <div className="mb-5 flex justify-between gap-5">
        <TextField
          id="streetAddress"
          label="Street Address"
          {...register("address.streetAddress", {
            required: "Street Address is required",
          })}
          error={errors.address?.streetAddress}
        />
        <TextField
          id="city"
          label="City"
          {...register("address.city", {
            required: "City is required",
          })}
          error={errors.address?.city}
        />
      </div>
      <div className="flex justify-between gap-5">
        <TextField
          id="landmark"
          label="Landmark"
          {...register("address.landmark")}
          // error={errors.address?.landmark}
        />
        <TextField
          id="state"
          label="State"
          {...register("address.state")}
          // error={errors.address?.state}
        />
      </div>
    </fieldset>
  );
}

export default DeliveryAddressForm;
