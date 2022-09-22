import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Recommendations from './components/Recommendations';
function App() {
  return (
      <div style={{justifyContent: "center", alignItems: "right",color:"blue"}}>
        <Header style = {{height: "40px", width: "100%"}}/>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/aboutMe' element={<AboutMe/>} />
               <Route path='/skills' element={<Skills/>} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/contactMe' element={<ContactMe/>} />
              <Route path='/recommendations' element={<Recommendations/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
