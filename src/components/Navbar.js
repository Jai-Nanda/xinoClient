import { Turn as Hamburger, Turn } from 'hamburger-react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { useCookies } from "react-cookie";
const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  }
  const Links = [
    {
      label: "HOME",
      path: "/",
      pname: "home"
    },
    {
      label: "Analytics",
      path: "/analytics",
      pname: "analytics"
    },
    {
      label: "STORE",
      path: "/store",
      pname: "store"
    },
    {
      label: "BOOKINGS",
      path: "/bookings",
      pname: "bookings"
    }
  ]


  return (
    <div
      
      className='bg-primary-color text-white  left-0 top-0 w-full z-10 ease-in  duration-300  pb-2 transition-all'
    >
      <div className='max-w-7xl m-auto flex justify-between items-center pt-5 '>
        <Link to='/' className="ml-10 sm:ml-0">
          {/* <Image src={Logo} alt='CORE LOGO' className='w-12'></Image> */}
          <img src={logo} alt="yes" />
        </Link>
        <ul className='hidden sm:flex font-medium'>
          {Links.map(({label , path}) => (
 <ul key={label}> 
              <li className='px-6  '>
                <div>
                <Link to={path}>{label}</Link>
                
                </div>
                
                
              </li>
            </ul>
            
          ))}
          </ul>
          
          {!cookies.access_token ? (
            <div>
        <Link to="/login">Login</Link>
        <Link to="/register" className='ml-5'>Register</Link>
        </div>
      ) : (
        <button onClick={logout}> Logout </button>
      )}  
      
        {/* Mobile Button */}
      </div>
    </div>
  );
};

export default Navbar;