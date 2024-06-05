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
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
  // bg-red-900 sm:bg-yellow-400 md:bg-blue-400 lg:bg-teal-400 xl:bg-lime-400
}

export default App;
