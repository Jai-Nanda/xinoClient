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
    navigate("/auth");
  }
  const Links = [
    {
      label: "HOME",
      path: "/",
      pname: "home"
    },
    {
      label: "NEWS",
      path: "/news",
      pname: "news"
    },
    {
      label: "EVENTS",
      path: "/events",
      pname: "events"
    },
    {
      label: "RESOURCES",
      path: "/resources",
      pname: "resources"
    },
    {
      label: "THE TEAM",
      path: "/team",
      pname: "team"
    },
    {
      label: "CONTACT",
      path: "/contact",
      pname: "contact"
    },
    {
      label: "GALLERY",
      path: "/gallery",
      pname: "gallery"
    },
  ]


  return (
    <div
      
      className=' sticky  left-0 top-0 w-full z-10 ease-in  duration-300  pb-2 transition-all'
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
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
          <button type='button'>YO</button>
        {/* Mobile Button */}
      </div>
    </div>
  );
};

export default Navbar;