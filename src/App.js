import HomePage from './comps/HomePage';
import Navigation from './comps/Navigation';
import {Route, Routes} from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import 'rsuite/styles/index.less';

function App() {
  return(
    <Routes>
      <Route path="/" element={<>
        <Navigation />
        <HomePage />
      </>}/>
    </Routes>
  )
  
}

export default App;