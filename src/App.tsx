import useBrowserRouter from "@src/routes/useBrowserRouter";
import "./App.css";

const App = () => {
  const routeElements = useBrowserRouter();
  return routeElements;
};

export default App;
