import React from "react";
import CustomForm from "./day01/CustomForm";
import ProblemWithNormalForm from "./day01/ProblemWithNormalForm";
import BasicReactHookForm from "./day01/BasicReactHookForm";
import NestedFieldsRHK from "./day01/NestedFieldsRHK";
import FoodDeliveryFormTraditionalWay from "./day02/FoodDeliveryFormTraditionalWay";
import FoodDeliveryFormRHK from "./day02/FoodDeliveryFormRHF";
import FoodDeliveryFormRHKWithResuableComponents from "./day03/FoodDeliveryFormRHFWithReusableComponents";
function Index() {
  return (
    <div className="bg-gray-800">
      {/* <ProblemWithNormalForm /> */}
      {/* <BasicReactHookForm /> */}
      {/* <NestedFieldsRHK /> */}
      {/* <CustomForm /> */}

      {/* <FoodDeliveryFormTraditionalWay /> */}
      {/* <FoodDeliveryFormRHK /> */}

      <FoodDeliveryFormRHKWithResuableComponents />
    </div>
  );
}

export default Index;
