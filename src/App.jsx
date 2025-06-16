import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Information from "./pages/Information";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/information" element={<Information />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
