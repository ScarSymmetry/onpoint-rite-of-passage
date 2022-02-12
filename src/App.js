import PageOne from './components/PageOne/PageOne';
import PageThree from './components/PageThree/PageThree';
import PageTwo from './components/PageTwo/PageTwo';
import ScrollBox from './components/ScrollBox/ScrollBox';
import SlidesWrapper from './components/SlidesWrapper/SlidesWrapper';

import './index.css';
function App() {
  return (
    <SlidesWrapper>
      {/* <PageOne /> */}
      <PageTwo />
      {/* <PageThree /> */}
      {/* <ScrollBox /> */}
    </SlidesWrapper>
  );
}

export default App;
