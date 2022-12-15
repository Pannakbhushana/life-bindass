import styles from './Footer.module.css'
import { FaMailBulk, FaPhone, } from "react-icons/fa";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GrMailOption,GrFacebookOption,GrInstagram,GrTwitter} from "react-icons/gr";

const Footer=()=>{
    return <>
        <div className={styles.container}>
            <div className={styles.childOne}>
                <div>
                    <h3>Women</h3>
                    <p>Tops</p>
                    <p>Ethnicwear</p>
                    <p>Bottoms</p>
                    <p>Dresses & Jumpsuits</p>
                    <p>Winterwear</p>
                    <p>Lingerie</p>
                    <p>Nightwear</p>
                    <p>Sportswear</p>
                    <p>Beauty</p>
                    <p>Watches & Sunglasses</p>
                </div>

                <div>
                <h3>Men</h3>
                    <p>Tops</p>
                    <p>Bottoms</p>
                    <p>Ethnicwear</p>
                    <p>Winterwear</p>
                    <p>Sportswear</p>
                    <p>Innerwear</p>
                    <p>Grooming</p>
                    <p>Watches</p>
                    <p>Sunglasses</p>
                </div>

                <div>
                    <h3>Kids</h3>                       
                    <p>Girls Clothing</p>
                    <p>Boys Clothing</p>
                    <p>Infants Girls</p>
                    <p>Infants Boys</p>
                    <p>Winterwear</p>
                    <p>Add ons</p>
                    <p>The Teen Shop</p>
                </div>

                <div>
                    <h3>Shoes & Bags</h3>
                    <p>Women</p>
                    <p>Men</p>
                    <p>Boys</p>
                    <p>Girls</p>
                    <p>Women Accessories</p>
                    <p>Men Accessories</p>
                    <p>Essential</p>
                </div>

                <div>
                    <h3>Beauty</h3>
                    <p>Makeup Eyes</p>
                    <p>Makeup Face</p>
                    <p>Makeup Lips</p>
                    <p>Makeup Nails</p>
                    <p>Perfumes</p>
                </div>
            </div>

            <div className={styles.childOne} >
                <div>
                    <h3>Explore</h3>
                    <p>Online Offers</p>
                    <p>Store Offers</p>
                    <p>Online Gift Card</p>
                    <p>Store Gift Card</p>
                    <p>Stores Nearby</p>
                    <p>EDGE Membership</p>
                    <p>Shop on WhatsApp</p>
                    <p>Fashion VLOG</p>
                    <p>Join CIRCLEMAG</p>
                    <p>SBI Offers</p>
                </div>

                <div>
                    <h3>About</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Take a Tour</p>
                    <p>Blog</p>
                    <p>Store Locator</p>
                    <p>Landmark Cares</p>
                </div>
                <div>
                    <h3>Help</h3>
                    <p>Contact us</p>
                    <p>Shipping</p>
                    <p>Returns Process</p>
                    <p>Returns Policy</p>
                    <p>Help Centre</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className={styles.bottom} >

            <div className={styles.Icon}><h2><FaPhone/></h2></div>
            <div className={styles.bottomChld} >
                <p>Talk To Us</p>
                <h5>1800-123-155</h5>
            </div>
                
            <div className={styles.Icon}><h2><BsFillQuestionSquareFill/></h2></div>
            <div className={styles.bottomChld}>
                <p>HelpCenter</p>
                <h5>help.bindasLife.com</h5>
            </div>

            <div className={styles.Icon}><h2><GrMailOption/></h2></div> 
            <div className={styles.bottomChld}>
                <p>Write To Us</p>
                <h5>help@lifeBindasStore.com</h5>
            </div>

            <div style={{
                marginLeft:'20%',
                display:'flex',
               
            }}>
                <div><h1><GrFacebookOption/></h1></div>
                <div style={{marginLeft:'25%' }}><h1><GrTwitter/></h1></div>
                <div style={{marginLeft:'25%' }}><h1><GrInstagram/></h1></div>
            </div>
        </div>
        <hr/>
        <div style={{display:'flex', marginTop:'2%' }} >
            <div><img style={{ height: "50px",marginLeft:'50%' }} src="./lifeBindas.png" alt="" /></div>
            <div style={{ height: "50px",marginLeft:'12%' }}><p style={{ marginTop:'0%' }}>© 2022 RNA Intellectual Property Limited.<br/>Terms & Conditions - Privacy Policy</p></div>
        </div>
    </>

}
export default Footer;




























































