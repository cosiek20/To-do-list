import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import List from './components/List/List';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </div>

  );
};
export default App;