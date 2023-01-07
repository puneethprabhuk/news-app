import './App.scss';
import Category from './components/category/Category';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Category />
      <Home />
    </div>
  );
}

export default App;
