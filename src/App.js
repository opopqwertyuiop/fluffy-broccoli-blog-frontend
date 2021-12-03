import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/category/:id' element={<MainPage />} />
        <Route path='/signun' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
