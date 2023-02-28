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
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
