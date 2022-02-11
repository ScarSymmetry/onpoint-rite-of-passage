import PageOne from './components/PageOne/PageOne';
import PageThree from './components/PageThree/PageThree';
import PageTwo from './components/PageTwo/PageTwo';
import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';

import './index.css';
function App() {
  return (
    <SlidesWrapper>
      <PageOne />
      <PageTwo />
      <PageThree />
    </SlidesWrapper>
  );
}

export default App;
