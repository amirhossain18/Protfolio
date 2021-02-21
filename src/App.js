import './App.css';
import Navbar from'./Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './Components/Header';
import Particles from 'react-particles-js';


function App() {
  return (
    <>
      <Particles
      params={{
         particles: {
            number: {
              value:30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }  
          }
         } }
      
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
