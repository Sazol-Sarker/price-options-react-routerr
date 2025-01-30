import { TiTickOutline } from "react-icons/ti";

import PropTypes from "prop-types";
const Features = ({ features }) => {
  return (
    <div>
      {
        // feature item with tick icon
        features.map((item, idx) => (
            <div  key={idx} className="flex justify-center items-center">
            <p className="flex">
            <TiTickOutline className="text-4xl pr-2" />
            {item}

              </p>
            </div>

        ))
      }
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.object,
};
export default Features;
