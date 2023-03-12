
import './App.css';
import { useState } from 'react';
import Assest from './view/assest-view/assest-view';
import AssestModal from './view/assest-view/modal-popup';


const App = () => {
  return (
    <>
      {/* <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Assest></Assest>
      <AssestModal></AssestModal>
      
      <div id="canvas-container">
      </div>
      
    </>
  );
};
export default App;
