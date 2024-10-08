import './App.css';
import { Login } from './components/login'
import { Signup } from './components/signup'

function App() {
  return (
    <div className="App">
      <h1>Internguru</h1>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
