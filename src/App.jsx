import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Signin, Signup, EventsFeed } from "./pages";
import { Header } from "./commen";

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth/signin" exact element={<Signin />} />
          <Route path="/auth/signup" exact element={<Signup />} />
          <Route path="/events" exact element={<EventsFeed />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
