import "./App.css";
import Bands from "./components/Bands/Bands";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Bands></Bands>
    </div>
  );
}

export default App;
