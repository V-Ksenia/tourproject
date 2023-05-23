import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./help.css";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div>
      <Navbar />
      
      <div className="heContainer">
      <h1 className="heText">Help</h1>
      <h1 className="heTitle">If u have any problems</h1>
      <h1 className="heCont">Please write to: lastrace@gmail.com</h1>

        <Footer/>
        </div>
    </div>
      
  );
};

export default Help;