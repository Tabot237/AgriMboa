import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<ComingSoon title="Marketplace" />} />
          <Route path="/in-season" element={<ComingSoon title="In season" />} />
          <Route path="/about" element={<ComingSoon title="How it works" />} />
          <Route path="/login" element={<ComingSoon title="Log in" />} />
          <Route path="/signup" element={<ComingSoon title="Join AgriMboa" />} />
          <Route path="*" element={<ComingSoon title="Page not found" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;