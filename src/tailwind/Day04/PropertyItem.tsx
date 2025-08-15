import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet } from "@fortawesome/free-solid-svg-icons";
import type { Property } from "./types";

type PropertyItemProps = {
  property: Property;
};

function PropertyItem({ property }: PropertyItemProps) {
  const { address, city, state, bedroom, bathroom, imageUrl } = property;

  return (
    <div className="border border-gray-300 rounded-lg shadow overflow-hidden">
      <img src={imageUrl} className="w-full h-32 object-cover" />
      <div className="p-4 text-gray-500">
        <div className="text-xl text-black">{address}</div>
        <div className="mb-4 text-sm">
          {city}, {state}
        </div>
        <div className="flex justify-between items-center text-xl">
          <div className="inline-flex justify-center items-center gap-1">
            <FontAwesomeIcon className=" text-blue-400" icon={faBed} />{" "}
            {bedroom}
          </div>
          <div className="inline-flex justify-center items-center gap-1">
            <FontAwesomeIcon className="text-blue-400" icon={faToilet} />{" "}
            {bathroom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyItem;
