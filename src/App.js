import './App.css'; // Import your styles
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MIdSection from './components/MIdSection';
import Numbers from './components/Numbers';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Numbers/>
       <MIdSection/>
       <Footer/>
    </div>
  );
}

export default App;
