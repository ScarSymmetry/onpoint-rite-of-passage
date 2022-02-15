import Modal from './components/Modal/Modal';
import PageOne from './components/PageOne/PageOne';
import PageThree from './components/PageThree/PageThree';
import PageTwo from './components/PageTwo/PageTwo';
import Pagination from './components/Pagination/Pagination';
import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';

import './index.css';
function App() {
  const isOpen = true;
  return (
    <>
      {/* <SlidesWrapper> */}
      {/* <PageOne />
        <PageTwo /> */}
      {/* <PageThree />
      </SlidesWrapper>
      <Modal modalOpen={isOpen} /> */}
      <Pagination />
    </>
  );
}

export default App;
