import styles from './Home.module.css'
import React from 'react'
import Card from '../Components/Card'
import MidBodyCard from '../Components/MidBodyCard'

const data=[
    "https://img.freepik.com/free-photo/cheerful-man-his-friends-having-fun-with-sparklers-new-year-s-eve-home_637285-12889.jpg?t=st=1670986331~exp=1670986931~hmac=71e34e68cfd2f0ebd9b4068de913651e1f8660395cecd4e51162f79481c72dc8",
    "https://assets.panashindia.com/media/wysiwyg/webp/homepage/the-holiday-sale-india-08-12-22.webp",
    "https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-bridesmaid-lehengas.webp",
    "https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-bridal-lehengas.webp",
    "https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-woven-sarees.webp",
    "https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-bridesmaid-lehengas.webp"
]

const Home=()=>{
    const [count, setCount]=React.useState(0);


    React.useEffect(()=>{
      
     const id= setInterval(()=>{
        setCount((pre)=>{
            if(pre>=5){
                setCount(0)
            }
            
            return pre+1
        });
        
       },3000)
    const cleanUp=()=>{
        clearInterval(id)
    }
    return cleanUp

    },[])
    return <>
   
        <div className={styles.carosal}>

            <img style={{width:'100%', height:'100%'}} src={data[count]} alt="" />
        </div>
        
        <Card/>
        <MidBodyCard/>
    
    </>
}
export default Home; 