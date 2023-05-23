import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Reserved from "./pages/reserved/Reserved";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Help from "./pages/help/Help";
import Contacts from "./pages/contacts/Contacts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reserved" element={<Reserved/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
