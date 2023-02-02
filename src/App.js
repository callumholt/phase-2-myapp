import './App.css';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <p>
        <Home />
        <About />
        <Portfolio />
        </p>
      </div>
        

   
    </div>
  );
}

export default App;
