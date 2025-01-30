import { TiTickOutline } from "react-icons/ti";
import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <TiTickOutline className="text-4xl " />
      <p className="">{feature}</p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
