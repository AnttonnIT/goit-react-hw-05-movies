import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft />
      Go back
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.object,
    }).isRequired,
  ]).isRequired,
};
