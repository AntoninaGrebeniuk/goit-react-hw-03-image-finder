// import { Component } from 'react';
import { Formik } from 'formik';
import { ImSearch } from 'react-icons/im';
import { SearchForm, Input, SearchFormBtn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormBtn type="submit">
          <ImSearch />
        </SearchFormBtn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // value={this.state.value}
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
