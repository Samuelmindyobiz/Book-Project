import { Route, Routes } from 'react-router-dom';
import Favs from './components/Favs';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
    </div>
  );
};

export default App;
