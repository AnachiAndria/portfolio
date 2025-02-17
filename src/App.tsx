import './index.css'
import { Loader } from "./components/Loader"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader />
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
}

export default App;
