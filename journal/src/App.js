import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'Workout';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'white', fontSize: 20}}>Journal</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
