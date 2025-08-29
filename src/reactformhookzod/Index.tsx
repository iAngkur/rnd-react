import React from "react";
import CustomForm from "./day01/CustomForm";
import ProblemWithNormalForm from "./day01/ProblemWithNormalForm";
import BasicReactHookForm from "./day01/BasicReactHookForm";
// import NestedFieldsRHK from "./day01/NestedFieldsRHK";
import ContactUsForm from "./day01/ContactUsForm";
import FoodDeliveryFormTraditionalWay from "./day02/FoodDeliveryFormTraditionalWay";
import FoodDeliveryFormRHK from "./day02/FoodDeliveryFormRHF";
import FoodDeliveryFormRHKWithResuableComponents from "./day03/FoodDeliveryFormRHFWithReusableComponents";
import RHKMuiZod from "./day04/RHKMuiZod";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactUsFormWithOtherLibrary from "./day01/ContactUsFormWithOtherLibrary";

function Index() {
  const queryClient = new QueryClient();

  return (
    <div>
      {/* <ProblemWithNormalForm /> */}
      {/* <BasicReactHookForm /> */}
      {/* <NestedFieldsRHK /> */}
      {/* <CustomForm /> */}
      {/* <ContactUsForm /> */}
      <ContactUsFormWithOtherLibrary />

      {/* <FoodDeliveryFormTraditionalWay /> */}
      {/* <FoodDeliveryFormRHK /> */}

      {/* <FoodDeliveryFormRHKWithResuableComponents /> */}

      {/* <QueryClientProvider client={queryClient}>
        <RHKMuiZod />
      </QueryClientProvider> */}
    </div>
  );
}

export default Index;
