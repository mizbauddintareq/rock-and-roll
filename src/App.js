import "./App.css";
import Bands from "./components/Bands/Bands";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Bands></Bands>
      <Footer></Footer>
    </div>
  );
}

export default App;
