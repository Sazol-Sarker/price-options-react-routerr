import './Link.css'
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li>{route.name}</li>
        </div>
    );
};
Link.propTypes={
    route:PropTypes.object.isRequired
}
export default Link;