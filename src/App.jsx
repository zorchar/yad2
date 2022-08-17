import './styles/styles.scss'
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ForSalePage from './Components/RealEstate/ForSalePage/ForSalePage';
import NewAd from './Components/NewAd/NewAd';
import NewAdContextProvider from './context/NewAdContext';

function App() {
  return (
    <BrowserRouter>
      <NewAdContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ForSalePage />} />
          <Route path="realestate" element={<Navigate to="forsale" replace={true} />} />
          <Route path="realestate/forsale" element={<ForSalePage />} />
          <Route path="new-ad" element={<NewAd />} />
        </Routes>
      </NewAdContextProvider>
    </BrowserRouter>
  )
}

export default App;
