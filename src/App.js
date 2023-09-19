import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
