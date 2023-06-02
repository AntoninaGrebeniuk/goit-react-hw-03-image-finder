import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { ImSearch } from 'react-icons/im';

export const SearchForm = styled(Form)`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 24px;
  background-color: #1bdfdfee;
  box-shadow: 2px 2px 3px #778580, -3px -3px 7px #fff;
`;

export const Input = styled(Field)`
  padding: 10px 20px 10px 40px;
  width: 320px;
  height: 35px;
  font-family: inherit;

  border: none;
  outline: none;
  border-radius: 30px;
  transform: scale(1);
  box-shadow: inset 2px 2px 3px #778580, inset -3px -3px 7px #fff;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    width 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border: none;
    outline: none;

    transform: scale(1.02);
    box-shadow: inset 1px 1px 2px #778580, inset -1px -1px 2px #fff;
  }
`;

export const SearchFormBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 55.4%;
  transform: translate(-50%, -50%);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 35px;
  height: 35px;
  font-family: inherit;
  font-weight: 600;
  text-transform: capitalize;
  /* background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.082),
    rgba(255, 255, 255, 0.25)
  ); */
  background-color: transparent;

  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #615e5e;

  &:hover {
    color: #1bdfdf;
    /* background-color: #7cfafa; */
  }
`;

export const SearchIcon = styled(ImSearch)`
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2);
    fill: currentColor;
  }
`;
