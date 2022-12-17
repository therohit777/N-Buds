import './App.css';
import Footer from './components/js/Footer';
import Home from './components/js/Home';
import Navbar from './components/js/Navbar';
import Services from './components/js/Services';
import Team from './components/js/Team';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
