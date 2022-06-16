import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Recent from './components/Recent';

function App() {
  return (
    <div className="App lg:ml-20 lg:mr-20 bg-white ">
      <Navbar />
      <Banner />
      <Recent />

    </div>
  );
}

export default App;
