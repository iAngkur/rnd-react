import { FormProvider, useForm, type UseFormReturn } from "react-hook-form";
import CheckoutForm, { type CheckoutFormType } from "./CheckoutForm";
import AddressForm, {
  type DeliveryAddressFormType,
} from "./DeliveryAddressForm";
import FoodDeliveryMaster, {
  type FoodDeliveryMasterType,
} from "./FoodDeliveryMaster";
import TextField from "./controls/TextField";
import SubmitButton from "./SubmitButton";

type FoodDeliveryFormType = {
  orderNo: number;
  address: DeliveryAddressFormType;
} & FoodDeliveryMasterType &
  CheckoutFormType;

function FoodDeliveryFormRHKWithResuableComponents() {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      defaultValues: {
        orderNo: new Date().valueOf(),
        customerName: "",
        mobile: "",
        email: "",
        paymentMethod: "",
        deliveryIn: "1",
        address: {
          streetAddress: "",
          landmark: "",
          city: "",
          state: "",
        },
      },
    });

  const {
    register,
    handleSubmit,
    control,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FoodDeliveryFormType) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form data:: ", { ...data });
  };

  const onError = (errors: any) => {
    console.log("Form errors: ", { ...errors });
  };

  return (
    <div className="w-full mx-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
        className="max-w-sm mx-auto"
      >
        <TextField
          id="orderNo"
          label="#Order No"
          {...register("orderNo")}
          className="mb-5 font-bold text-gray-100"
          disabled
        />
        <FormProvider {...methods}>
          <FoodDeliveryMaster />
          <CheckoutForm />
          <AddressForm />
        </FormProvider>

        {/* <SubmitButton  isSubmitting={isSubmitting} /> */}
        <SubmitButton control={control} />
      </form>
    </div>
  );
}

export default FoodDeliveryFormRHKWithResuableComponents;
