import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Test with Traideas</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/ApiTesting" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>API Testing</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;