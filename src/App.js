import HomePage from './comps/HomePage';
import Navigation from './comps/Navigation';
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';
import Communication from './comps/Communication';
import Exercise from './comps/Exercise';
import Biography from './comps/Biography';
import React, {useRef} from "react";


function App() {

  const homeRef = useRef(null); 
  const exerciseRef = useRef(null); 
  const biographyRef = useRef(null);
  const commRef = useRef(null);

  return(
    <div>
      <Navigation homeRef={homeRef} exerciseRef={exerciseRef} biographyRef={biographyRef} commRef={commRef}/>
      <HomePage homeRef={homeRef}/>
      <Exercise exerciseRef={exerciseRef}/>
      <Biography biographyRef={biographyRef}/>
      <Communication commRef={commRef}/>
    </div>
  )
  
}

export default App;