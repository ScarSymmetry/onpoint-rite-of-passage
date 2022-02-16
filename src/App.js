import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';
import Modal from './components/Modal/Modal';
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
      <Modal modalOpen={false} />
    </>
  );
}

export default App;
