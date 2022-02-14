import Portal from '../Portal/Portal';
import styles from './Modal.module.css';
import { useState } from 'react';

const Modal = ({ modalOpen }) => {
  return (
    <Portal isOpen={modalOpen}>
      <div style={{ color: 'white' }}>HELLO LOL CUNTS</div>
    </Portal>
  );
};

export default Modal;
