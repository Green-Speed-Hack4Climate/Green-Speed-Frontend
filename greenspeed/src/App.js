import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import RequestARide from "./pages/RequestARide";
import ContactUs from "./pages/ContactUs";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="request" element={<RequestARide />}/>
        <Route path="contactus" element={<ContactUs />}/>
        <Route path="details" element={<Details />}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
