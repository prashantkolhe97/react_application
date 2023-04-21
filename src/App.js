import logo from './logo.svg';
import './App.css';
import Invitation from './component/Invitation';

function App() {
  return (
    <div className="App">
      <Invitation text="Birthday party invitation" email="jaGdish@gmail.com" name="jaGdish" birth="birthday party" friend="Ritu,Saurabh,Kartik." field="Green field Avenue. " last="jaGdish" />
    </div>
  );
}

export default App;
