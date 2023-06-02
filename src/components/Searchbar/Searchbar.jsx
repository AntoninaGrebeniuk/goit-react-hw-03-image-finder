import { Formik } from 'formik';
import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  Input,
  SearchFormBtn,
  SearchIcon,
} from './Searchbar.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string().trim(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <SearchForm>
        <SearchFormBtn type="submit">
          <SearchIcon />
        </SearchFormBtn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </SearchForm>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
