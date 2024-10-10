import useBrowserRouter from "@hooks/useBrowserRouter";
import './App.css';

const App = () => {
  const routeElements = useBrowserRouter();
  return routeElements;
}

export default App;
