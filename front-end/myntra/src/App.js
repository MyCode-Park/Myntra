import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Signup/>
      {/* <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
