import './index.css'
import { Loader } from "./components/Loader"
import {Navigation} from "./components/Navigation"
import { Home } from './components/home';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader />
      <Navigation/>
      <Home/>
      <p>
        <p>espacement </p>

        <p>about</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet, temporibus quam, distinctio, magnam natus sapiente in facilis adipisci explicabo sit enim labore dolores dicta minima ipsam. Repellat, nihil doloremque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet, temporibus quam, distinctio, magnam natus sapiente in facilis adipisci explicabo sit enim labore dolores dicta minima ipsam. Repellat, nihil doloremque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet, temporibus quam, distinctio, magnam natus sapiente in facilis adipisci explicabo sit enim labore dolores dicta minima ipsam. Repellat, nihil doloremque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eveniet, temporibus quam, distinctio, magnam natus sapiente in facilis adipisci explicabo sit enim labore dolores dicta minima ipsam. Repellat, nihil doloremque!

      </p>
      
    </div>
  );
}

export default App;
