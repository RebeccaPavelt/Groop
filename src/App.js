import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
