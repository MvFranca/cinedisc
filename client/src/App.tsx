import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Routes";
import "./styles/App.css";

function App() {
  return (
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
  );
}

export default App;
