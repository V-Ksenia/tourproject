import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./reserved.css";
import { Link } from "react-router-dom";

const Reserved = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="resContainer">
      <h1 className="resText">You booked a room!</h1>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h1 className="resTitle">Go to the main page</h1>
        </Link>
        <Footer/>
        </div>
        </div>
      
  );
};

export default Reserved;