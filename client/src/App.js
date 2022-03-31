import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
// import CharacterCreate from "./components/CharacterCreate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/character" element={<CharacterCreate />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
