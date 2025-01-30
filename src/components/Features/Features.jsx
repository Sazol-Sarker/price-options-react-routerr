import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
// import './Features.css';
const Features = ({ features }) => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      {
        features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)

      }
     
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.array,
};
export default Features;
