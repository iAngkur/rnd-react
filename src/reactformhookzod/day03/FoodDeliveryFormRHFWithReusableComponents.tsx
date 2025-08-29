import {
  FormProvider,
  useForm,
  type UseFormReturn,
  type FieldErrors,
} from "react-hook-form";
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
    control, // Pass the control prop to the child components to have their own state mangement.
    // formState: { isSubmitting },
    // getFieldState, // It's called on form Submit
    watch, // subscribe children state changes
  } = methods;

  const mobile = watch("mobile");

  const onSubmit = async (data: FoodDeliveryFormType) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form data:: ", { ...data });
  };

  const onError = (errors: FieldErrors) => {
    console.log("Form errors: ", { ...errors });
    // console.log(getFieldState("customerName"));
    // console.log(getFieldState("address.city"));
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
