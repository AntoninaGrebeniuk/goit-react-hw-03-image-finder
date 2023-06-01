import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { getImages } from './services/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      //
    } catch (error) {
      //
    }

    if (prevState.page !== page || prevState.query !== query) {
      // this.setState({ isLoading: true });
      const { hits } = await getImages(query, page);

      this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
    }
  }

  handleSearch = query => {
    this.setState(query);
  };

  render() {
    const { images } = this.state;
    return (
      <div
      // style={{
      // height: '100vh',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // fontSize: 40,
      // color: '#010101'
      // }}
      >
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {/* <Loader /> */}
      </div>
    );
  }
}
