import Modal from './components/Modal/Modal';
import PageOne from './components/PageOne/PageOne';
import PageThree from './components/PageThree/PageThree';
import PageTwo from './components/PageTwo/PageTwo';
import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';

import './index.css';
function App() {
  const isOpen = false;
  return (
    <SlidesWrapper>
      <PageOne />
      <PageTwo />
      <PageThree />
      <Modal modalOpen={isOpen} />
    </SlidesWrapper>
  );
}

export default App;
