import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { getImages } from './services/api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: STATUS.IDLE,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    // if (prevState.query !== query) {
    //   await this.setState({ images: [] });
    // }

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: STATUS.PENDING });

      try {
        const { hits, totalHits } = await getImages(query, page);
        const perPage = hits.length; // кол-во элементов на странице

        await this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalHits: Math.ceil(totalHits / perPage),
        }));

        if (totalHits === 0) {
          toast.warn('Nothing was found for your request');
        }

        this.setState({ isLoading: STATUS.RESOLVED });
      } catch (error) {
        toast.error(`Oops! Something went wrong! ${error}`);
        this.setState({ isLoading: STATUS.REJECTED });
      }
    }
  }

  handleSearch = ({ query }) => {
    // if (this.state.query === query.trim()) {
    this.setState({ query, page: 1, images: [] }); // При сабмите скидываю страницу и очищаю массив
    // }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, totalHits, page } = this.state;
    // const showLoadMoreBtn = totalHits !== 0 || totalHits > page;
    const showLoadMoreBtn = totalHits > page;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading === STATUS.PENDING && <Loader />}
        {isLoading === STATUS.RESOLVED && <ImageGallery images={images} />}
        {/* {isLoading === STATUS.REJECTED && ERROR} */}

        {showLoadMoreBtn && (
          <Button
            loadMore={this.handleLoadMore}
            disabled={isLoading === STATUS.PENDING ? true : false}
          />
        )}

        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="colored"
        />
      </div>
    );
  }
}
