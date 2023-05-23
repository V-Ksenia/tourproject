import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contacts.css";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      
      <div className="coContainer">
      <h1 className="coText">Contacts</h1>
      <h1 className="coTitle">Email:<h1 className="coCont">lastrace@gmail.com</h1></h1>
      <h1 className="coTitle">Instargam:<h1 className="coCont">@ksenia.cwf</h1><h1 className="coCont">@pollinanoskovich</h1></h1>
      <h1 className="coTitle">Address:<h1 className="coCont">ul.Gikalo 9</h1></h1>
      

        <Footer/>
        </div>
    </div>
      
  );
};

export default Contacts;