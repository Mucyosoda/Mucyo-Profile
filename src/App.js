import './App.css';
import Navbar from './components/Navbar';
import Firstbanner from './components/First-banner';
import Banner from './components/Banner';
import Recent from './components/Recent';
import data from './data';
import Project from './components/Project';


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
      <div className="container mt-12">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden">
          {projects}
        </div>
      </div>
    </div>
  );
}

export default App;
