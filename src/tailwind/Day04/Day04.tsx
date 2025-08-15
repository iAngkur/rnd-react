import React from "react";
import properties from "./properties";
import PropertyItem from "./PropertyItem";

function Day04() {
  const propertyItems = properties.map((property, idx) => (
    <PropertyItem key={idx} property={property} />
  ));

  return (
    <div className="container px-4 mx-auto my-8 grid grid-cols-1 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
      {propertyItems}
    </div>
  );
}

export default Day04;
