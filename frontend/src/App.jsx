import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/CardList/CardList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
