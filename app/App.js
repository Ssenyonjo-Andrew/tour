import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer/Footer';
import { Routes, Route, Switch } from "react-router-dom";
import HomePage from './component/Pages/HomePage';
import ServicePage from './component/Pages/ServicePage';
import NewsPage from './component/Pages/NewsPage';
import ContactPage from './component/Pages/ContactPage';
import { useEffect, useState } from 'react';
import Layout from './component/Layout/Layout';

function App(props) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('backgroundColor') === 'black';
  });

  // Update background color and localStorage when dark mode changes
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    localStorage.setItem('backgroundColor', darkMode ? 'black' : 'white');
  }, [darkMode]);

  // Handle toggle switch
  const handleToggle = () => {
    setDarkMode(!darkMode);

  };
  return (
    <div >
      <Layout darkMode={darkMode} handleToggle={handleToggle}>
      {/* <Header darkMode={darkMode} handleToggle={handleToggle} /> */}

      {/* <Routes>
      <Route path='/'  element={<HomePage  darkMode={darkMode}/>}/>
      <Route path='/ServicePage'  element={<ServicePage  darkMode={darkMode}/>}/>
      <Route path='/NewsPage' element={<NewsPage  darkMode={darkMode}/>}/>
      <Route path='/ContactPage' element={<ContactPage  darkMode={darkMode}/>}/>
    </Routes> */}
      <Switch>
        <Route exact path="/" component={() => <HomePage darkMode={darkMode} />} />
        <Route path="/ServicePage" component={() => <ServicePage darkMode={darkMode} />} />
        <Route path="/NewsPage" component={() => <NewsPage darkMode={darkMode} />} />
        <Route path="/ContactPage" component={() => <ContactPage darkMode={darkMode} />} />
      </Switch>
</Layout>
      {/* <Footer /> */}
    </div>
  );
}

export default App;