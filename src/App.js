import './App.css';
import Navbar from './components/Navbar';
import Firstbanner from './components/First-banner';
import Banner from './components/Banner';
import Recent from './components/Recent';
import data from './data';
import Project from './components/Project';
import SlideCard from './components/SlideCard'


function App() {
  const projects = data.map(item => {
    return (
        <Project
                key={item.id}
                {...item}
          />
    )
})
  return (
    <div className="App lg:ml-20 lg:mr-20 bg-white ">
      <Navbar />
      <Firstbanner />
      <Banner />
      <Recent />
      <SlideCard />

    </div>
  );
}

export default App;
