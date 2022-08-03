import './App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Habits from './components/Habits';
import AddHabits from './components/AddHabits';

function App() {
  return (
    <div className="App">
     <Layout>
      <Routes>
        <Route path='/' element={<Habits/>}/>
        <Route path='/addHabits' element={<AddHabits/>}/>
      </Routes>
     </Layout>
    </div>
  );
}

export default App;
