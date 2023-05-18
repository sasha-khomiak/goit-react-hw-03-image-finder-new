import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppWrap } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    arrayOfImages: [],
    page: 1,
    showButton: false,
    showLoader: false,
    showModal: false,
    actualImage: '',
  };

  onSubmitForm = query => {
    this.setState({ query: '', arrayOfImages: [], page: 1 });
    this.setState({ query: query });
    this.fetchAPI(query, 1);
  };

  onButtonClickLoadMore = () => {
    console.log('button');
    this.fetchAPI(this.state.query, this.state.page + 1);
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchAPI(query, page) {
    let BASE_URL = 'https://pixabay.com/api/?';
    let KEY = '34781743-09d11a08c8aa729d147b2c9f6';
    let PER_PAGE = '12';
    let URL = `${BASE_URL}q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

    // пказуємо лоадер
    this.setState({ showLoader: true });

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data);

        if (this.state.page === 1) {
          toast(`Ура! Знайдено ${data.totalHits} результатів!`, {
            autoClose: 1000,
          });
        }

        this.setState(prevState => ({
          arrayOfImages: [...prevState.arrayOfImages, ...data.hits],
        }));

        //перевірка показу кнопки
        let totalNumberOfImages = data.totalHits;
        let alreadyDownloaded = PER_PAGE * this.state.page;
        if (totalNumberOfImages > alreadyDownloaded) {
          this.setState({ showButton: true });
        } else {
          this.setState({ showButton: false });
        }

        this.setState({ showLoader: false });
      })

      .catch(error => {
        this.setState({ error });
      });
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  setActualImage = imageLink => {
    this.setState({ actualImage: imageLink });
  };

  render() {
    return (
      <AppWrap>
        <ToastContainer />
        <Searchbar onSubmit={this.onSubmitForm} />
        {this.state.arrayOfImages.length > 0 && (
          <ImageGallery
            images={this.state.arrayOfImages}
            showModal={this.showModal}
            setActualImage={this.setActualImage}
          />
        )}
        {this.state.showButton && (
          <Button onClick={this.onButtonClickLoadMore} />
        )}
        {this.state.showLoader && <Loader />}
        {this.state.showModal && (
          <Modal
            actualImage={this.state.actualImage}
            hideModal={this.hideModal}
          />
        )}
      </AppWrap>
    );
  }
}
