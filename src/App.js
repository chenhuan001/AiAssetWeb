
import './App.css';
import { useState } from 'react';
import Assest from './assest-view/assest-view';
import AssestModal from './assest-view/modal-popup';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Assest onClick={() => setOpen(true)}></Assest>
      <AssestModal></AssestModal>
    </>
  );
};
export default App;
