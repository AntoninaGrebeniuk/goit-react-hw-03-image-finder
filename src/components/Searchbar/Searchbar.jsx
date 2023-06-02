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

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     const { value } = e.target;

//     this.setState({ query: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     console.log(this.state);
//   };

//   render() {
//     return (
//       <header class="searchbar">
//         <form class="form" onSubmit={this.handleSubmit}>
//           <button type="submit" class="button">
//             <span class="button-label">Search</span>
//           </button>

//           <input
//             class="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.value}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
