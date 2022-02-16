import Modal from './components/Modal/Modal';

import Pagination from './components/Pagination/Pagination';
import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';
import { useState } from 'react';

import './index.css';
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <SlidesWrapper
        openModal={setModalOpen}
        closeModal={setModalOpen}
        isModalOpen={modalOpen}
      />

      {/* <Pagination /> */}
    </>
  );
}

export default App;
