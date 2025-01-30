import Link from "./../Link/Link";
import PropTypes from "prop-types";
const NavBar = ({ routes }) => {
  return (
    <div className="">
      <ul>
        {
        routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))
        }
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  routes: PropTypes.array.isRequired,
};
export default NavBar;
