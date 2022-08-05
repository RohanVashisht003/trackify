import '../App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Habits from './Habits';
import AddHabits from './AddHabits';

function App() {
  return (
    <div className="App">
     <Layout>
      <Routes>
        {/* habits page */}
        <Route path='/' element={<Habits/>}/>
        {/* adding habits page */}
        <Route path='/addHabits' element={<AddHabits/>}/>
      </Routes>
     </Layout>
    </div>
  );
}

export default App;
