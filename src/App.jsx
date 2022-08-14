import './styles/styles.scss'
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ForSalePage from './Components/RealEstate/ForSalePage/ForSalePage';
import NewAd from './Components/NewAd/NewAd';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ForSalePage />} />
        <Route path="realestate" element={<Navigate to="forsale" replace={true} />} />
        <Route path="realestate/forsale" element={<ForSalePage />} />
        <Route path="new-ad" element={<NewAd />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
