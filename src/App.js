import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <ProfilePhoto/>
        <FullName/>
        <Adresse/>
      </div>
    </div>
  );
}

export default App;
