import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Category from './components/category/Category';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { createBrowserRouter, Route, RouterProvider, Outlet } from 'react-router-dom';
import NewsDetails from './pages/news-details/NewsDetails';


function App() {

  const API_KEY = "849e9a3048cb4fc8af5d237b4ddad48e";
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [isLoading, setIsLoading] = useState(false);


  const getNews = async (selectedCategory) => {
    setIsLoading(true)
    setCategory(selectedCategory);
    const data = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${API_KEY}`);
    if (data) {
      setNews(data.data.articles);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getNews(category);
  }, [])

  const Layout = () => {
    return (
      <div>
        <Header />
        <Category getSelectedNews={getNews} />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home news={news} category={category} />
        },
        {
          path: "/read",
          element: <NewsDetails />
        }
      ]
    }
  ]);

  return (
    <div className="app">
      {isLoading ? <div className='loading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
      </div> : <RouterProvider router={router} /> }
    </div>
  );
}

export default App;
