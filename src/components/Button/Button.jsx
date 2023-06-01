import { LoadMore } from './Button.styled';

export function Button({ loadMore }) {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
}
