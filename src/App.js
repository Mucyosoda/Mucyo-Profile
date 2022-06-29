import './App.css';
import Navbar from './components/Navbar';
import Firstbanner from './components/First-banner';
import Banner from './components/Banner';
import Recent from './components/Recent';
import SlideCard from './components/SlideCard';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App lg:ml-20 lg:mr-20 bg-white ">
      <Navbar />
      <Firstbanner />
      <Banner />
      <Recent />
      <SlideCard />
      <Footer />
    </div>
  );
}

export default App;
