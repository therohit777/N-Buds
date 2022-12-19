import './App.css';
// import Aboutus from './components/js/Aboutus';
import Contactus from './components/js/Contactus';
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
      {/* <Aboutus/> */}
      <Services/>
      <Team/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
