import PropTypes from 'prop-types'
import { StyledWrapper } from './styles';

const Container = ({children, removeMargin}) => {
    return (
        <StyledWrapper margin={removeMargin}>
            {children}
        </StyledWrapper>
    );
}
 
export default Container;


Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    removeMargin: PropTypes.bool.isRequired
}

Container.defaultProps = {
    removeMargin: false
}