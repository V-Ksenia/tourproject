import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    
    navigate("/")
    }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Last Race</span>
        </Link>
        {user ? user.username && <button onClick={handleClick} className="lButton">
          Log out
        </button> : (
          
          <div className="navItems">
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Log in</button>
            </Link>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
