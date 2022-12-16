import HomePage from './comps/HomePage';
import Navigation from './comps/Navigation';
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';
import Communication from './comps/Communication';
import Exercise from './comps/Exercise';
import Biography from './comps/Biography';
import React, {useRef} from "react";
import { Route,Routes } from 'react-router-dom';
import BiographyPage from './pages/BiographyPage';
import profData from './assets/profData';
import Info from './comps/Inforamtion';


function App() {

  const homeRef = useRef(null); 
  const infoRef = useRef(null);
  const exerciseRef = useRef(null); 
  const biographyRef = useRef(null);
  const commRef = useRef(null);

  return(
    <div>
      <Navigation homeRef={homeRef} exerciseRef={exerciseRef} biographyRef={biographyRef} commRef={commRef} infoRef={infoRef}/>
      <Routes>
        <Route path="/" element={<>
          <HomePage homeRef={homeRef}/>
          {/*<Exercise exerciseRef={exerciseRef}/>*/}
          <Biography biographyRef={biographyRef}/>
          <Communication commRef={commRef}/>
        </>}/>
        <Route path="/biographypageliappis" element={<BiographyPage/>} />
        <Route path="/biographypageamalia" element={<BiographyPage/>} />
      </Routes>
        
    </div>
  )
  
}

export default App;