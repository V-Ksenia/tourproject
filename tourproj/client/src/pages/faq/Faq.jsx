import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./faq.css";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div>
      <Navbar />   
      <div className="faqContainer">
      <h1 className="faqT">Frequently Asked Questions</h1>
      <h1 className="faqText">How can I find a hotel?</h1>
      <h1 className="faqTitle">Go to the main page and find the search field, enter the city in which you want to stay and click Search button. </h1>
      <h1 className="faqText">How can I book a hotel?</h1>
      <h1 className="faqTitle">After finding a hotel you want to stay in, click on the Reserve button, then choose the room and click Reserve. </h1>
      <h1 className="faqText">How can I find a hotel?</h1>
      <h1 className="faqTitle">Go to the main page and find the search field, enter the city in which you want to stay and click Search button. </h1>
      <h1 className="faqText">How can I book a hotel?</h1>
      <h1 className="faqTitle">After finding a hotel you want to stay in, click on the Reserve button, then choose the room and click Reserve. </h1>
      <h1 className="faqText">How can I find a hotel?</h1>
      <h1 className="faqTitle">Go to the main page and find the search field, enter the city in which you want to stay and click Search button. </h1>
      <h1 className="faqText">How can I book a hotel?</h1>
      <h1 className="faqTitle">After finding a hotel you want to stay in, click on the Reserve button, then choose the room and click Reserve. </h1>
        <Footer/>
        </div>
    </div>
      
  );
};

export default Faq;