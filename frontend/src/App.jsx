import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/footer/Footer";
import Filtres from "./components/filtres/Filtres";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Filtres />
        <CardList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
