import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./pages";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
