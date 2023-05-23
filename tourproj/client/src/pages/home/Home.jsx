import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Types of houses we have!</h1>
        <PropertyList/>
        <h1 className="homeText"
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }} 
        >
          Want to reserve?
        </h1>
       
        <Footer/>
        
        
      </div>
    </div>
  );
};

export default Home;
