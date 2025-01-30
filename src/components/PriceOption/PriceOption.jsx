import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";

import Features from "../Features/Features";
const PriceOption = ({option}) => {
    const {name,price,features,membership,location,rating,open24Hours}=option;
    console.log(option);
    return (
        <div className="bg-green-500 m-4 p-4 rounded-md">

            <h2 className="text-[2.55rem] font-extrabold">${price}/month</h2>
            <h2 className="text-3xl font-bold py-4">{membership} Membership</h2>
            <h3 className="text-xl p-4 font-semibold"> <em>{name}</em> </h3>
            <h3 className="flex items-center justify-center text-lg p-4 font-md">
                <FaMapMarkerAlt className="text-xl"/>
            <em>{location}</em> </h3>
            <Features features={features}></Features>
            <button className="border-blue-600 bg-slate-200 m-4 p-2 font-bold
            rounded-md hover:cursor-pointer">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
option:PropTypes.object
}
export default PriceOption;