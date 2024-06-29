import './App.css';
import Stepper from '../src/stepper';

import Demo1 from '../src/components/stepper-page-1';
import Demo2 from '../src/components/stepper-page-2';
import Demo3 from '../src/components/stepper-page-3';
import Demo4 from '../src/components/stepper-page-4';
import Demo5 from '../src/components/stepper-page-5';

const componentList = [
  <Demo1 />,
  <Demo2 />,
  <Demo3 />,
  <Demo4 />,
  <Demo5 />
];

function App() {
  return (
    <>
      <Stepper componentList={componentList} />
    </>
  );
}

export default App;