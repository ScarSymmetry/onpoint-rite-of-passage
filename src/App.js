import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';
import PaginationDisplay from './components/Pagination/PaginationDisplay';
import { useState } from 'react';

import './index.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {/* <SlidesWrapper
        openModal={setModalOpen}
        closeModal={setModalOpen}
        isModalOpen={modalOpen}
      /> */}

      <PaginationDisplay />
    </>
  );
}

export default App;
