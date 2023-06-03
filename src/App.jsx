import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Services, Portfolio } from "./pages";
import { Header, Footer } from "./commen";

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" exact element={<About />} /> */}
          {/* <Route path="/services" exact element={<Services />} /> */}
          {/* <Route path="/portfolio" exact element={<Portfolio />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
);

export default App;
