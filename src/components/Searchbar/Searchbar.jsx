import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    //   console.log('event', event.target.value);
    this.setState({ query: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Ви не введи запит. Введіть слово!', { autoClose: 1000 });
      this.clearInput();
      return;
    }

    this.props.onSubmit(this.state.query);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <SearchbarHeader>
        <ToastContainer />
        <SearchForm onSubmit={this.handleSubmitForm}>
          <SearchFormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.query}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

//proptypes
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
