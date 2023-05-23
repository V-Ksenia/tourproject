import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="abContainer">
      <h1 className="abText">About Last Race</h1>
      <h1 className="abTitle">The global tourism market has recently been constantly and dynamically developing, 
        mastering new, more advanced technologies for interacting with consumers of tourism services.
        One of these technologies is online sales in the tourism industry, the popularity of which is growing from
        year to year among the world community. 
        Low attendance and booking on tourist sites are often caused by the 
        lack of professionalism of the travel companies themselves. An unreasonably cumbersome design of tourist sites 
        of Belarusian travel companies is noted, which makes it difficult for the user to communicate with the resource.
        Irregular updating of information on the site, which is typical for many tourist resources, also does not contribute 
        to the growth of attendance. When creating this project, we will take into account all the mistakes made in the online 
        sale of tourist products and create a user-friendly, pleasant site.</h1>

        <Footer/>
        </div>
    </div>
      
  );
};

export default About;