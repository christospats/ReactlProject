import HomePage from './comps/HomePage';
import Navigation from './comps/Navigation';
import {Route, Routes} from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';
import Communication from './comps/Communication';
import Exercise from './comps/Exercise';
import Biography from './comps/Biography';

function App() {
  return(
    <Routes>
      <Route path="/" element={<>
        <Navigation />
        <HomePage />
        <Exercise />
        <Biography />
        <Communication />
      </>}/>
    </Routes>
  )
  
}

export default App;