import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export function Button({ loadMore }) {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
