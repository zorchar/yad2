import './styles/styles.scss'
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ForSalePage from './Components/RealEstate/ForSalePage/ForSalePage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="realestate" element={<Navigate to="forsale" replace={true} />} />
        <Route path="realestate/forsale" element={<ForSalePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
