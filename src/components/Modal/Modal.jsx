import React, { Component } from 'react';
import { Overlay, ModalContent, ModalImg } from './Modal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keydownCheck);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownCheck);
  }

  keydownCheck = event => {
    console.log(event);
    if (event.code === 'Escape') {
      this.props.hideModal();
    }
  };

  onBackdropClick = event => {
    //   console.log('event.target', event.target);
    //   console.log('event.currentTarget', event.currentTarget);
    if (event.target === event.currentTarget) {
      this.props.hideModal();
    }
  };

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.onBackdropClick}>
        <ModalContent className="modal">
          <ModalImg src={this.props.actualImage} alt="preview" />
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
