import './Link.css'
import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {name,path}=route;
    return (
       
            <li className='ml-6'><a href={path}>{name}</a></li>
      
    );
};
Link.propTypes={
    route:PropTypes.object.isRequired
}
export default Link;