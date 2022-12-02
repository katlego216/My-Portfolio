import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Welcome } from "./components/Welcome";
import { Skills } from "./components/Skills";
import { Whysovtech } from "./components/Whysovtech";
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Whysovtech />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;