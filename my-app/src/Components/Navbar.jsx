import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import AllRoutes from "./AllRoutes";
import { FaSistrix, FaRegHeart, FaShoppingBag, FaBusAlt, FaStoreAlt} from "react-icons/fa";


const links=[
    {path:'/women', text:'Women'},
    {path:'/men', text:'Men'},
    {path:'/kids', text:'Kids'},
    {path:'/shopandbags', text:'ShopAndBags'},
    {path:'/beauty', text:'Beauty'}
];

const searchBarStyle={marginLeft:'0%', marginTop:'1%', border:'0px solid black', height:'100%', width:'40px' };

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div>
          <h4><FaBusAlt/> Free Shipping</h4>
          <h4> <FaStoreAlt/> Click & Collect</h4>
          <h4> <FaStoreAlt/> Return to Store</h4>
        </div>

        <div>
          <h5>Download Our App </h5>
          <h5>Stor Locator </h5>
          <h5>Help</h5>
        </div>
      </div>

      <div className={styles.navbarMidContainer}>
       
     

    <div className={styles.MidChildOne}>

        <NavLink key={'1'} to="/">
             <img style={{ height: "50px" }} src="./lifeBindas.png" alt="" />
        </NavLink>
        
            {links.map((el)=> <div key={el.path} style={{border:'0px solid red'}} >
            <NavLink className={({isActive})=> isActive ? styles.active : styles.Default}  to={el.path} >{el.text}</NavLink>
            </div>)}


        <div className={styles.MidChildTwo}>
            <h2 style={searchBarStyle}><FaSistrix/></h2>
            <input style={{width:'90%', height:'85%', border:'none', marginTop:'0.5%', backgroundColor: "rgb(233, 227, 227)", outlineStyle: "none" }} placeholder="What are you looking for" />
        </div>

        <h5>More</h5>
        <h5>Sign up / Sign In</h5>
        <h2><FaRegHeart/></h2>
        <h2><FaShoppingBag/></h2>
    </div>

    

        
        
      </div>

      <div className={styles.navbarBottomContainer}>Now Live | Biggest Sale Of The Year </div>
        <AllRoutes/>
    </>
  );
};

export default Navbar;
