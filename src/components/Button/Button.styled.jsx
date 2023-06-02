import styled from '@emotion/styled';

export const LoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 8px;

  min-width: 100px;
  height: 35px;
  font-family: inherit;
  font-weight: 600;
  text-transform: capitalize;
  /* color: #f1fafa; */

  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.082),
    rgba(255, 255, 255, 0.25)
  );

  background-color: #1bdfdf;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  box-shadow: -2px -2px 5px 0 #f1fafa, 3px 3px 7px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: inset 2px 2px 3px #778580, inset -3px -3px 7px #89e6e6;
  }
`;
