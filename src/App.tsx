import './index.css'
import { Loader } from "./components/Loader"
import { Navigation } from "./components/Navigation"
import { Home } from './components/home'
import { DecorativeLines } from './components/DecorativeLines'  
import { About } from './components/About'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <DecorativeLines />
      <Loader />
      <Navigation />
      <Home />
      <About/>
    </div>
  );
}

export default App;
