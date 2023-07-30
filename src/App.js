

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Pages/Add/Add';
import Delete from './Pages/Delete/Delete';
import Get from './Pages/Get/Get';
import Header from './Pages/Header/Header';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path="/" element={<Add></Add>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/get" element={<Get></Get>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
