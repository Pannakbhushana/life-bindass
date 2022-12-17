const Card=()=>{

    const myStyle={
        border:'0px solid black', 
        width:'90%',
        height:'280px',
        marginLeft:'5%',
        marginTop:'2%',
        display:'flex',
    }

    const CardStyle={
        border:'0px solid black', 
        width:'20%',
        height:'280px', 
        marginLeft:'4%' }

    const imgStyle={
        width:'100%',
        height:'80%'
    }

    return <div style={{backgroundColor:'#f8f8f8', width:'90%',marginLeft:'5%',textAlign:'center'}}>
        <h1>CATEGORIES TO BAG</h1>
    <div style={myStyle}>
        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-sarees-07-12-22.webp" alt="" />
        <p>Sarres</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-salwar-suits-07-12-22.webp" alt="" />
        <p>Salwar Suits</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-lehengas-07-12-22.webp" alt="" />
        <p>Lehengas</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-dresses-07-12-22.webp" alt="" />
        <p>Dresses</p>
        </div>
    </div>
    <hr/>

    <div style={myStyle}>
        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-kurta-sets-07-12-22.webp" alt="" />
        <p>Kurta Sets</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-jewelry-07-12-22.webp" alt="" />
        <p>Jewelry</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-clutches-07-12-22.webp" alt="" />
        <p>Clutches</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-wedding-sherwani-07-12-22.webp" alt="" />
        <p>Sherwani</p>
        </div>
    </div>
    <hr/>

    <div style={myStyle}>
        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/saree-blouse-07-12-22.webp" alt="" />
        <p>Saree Blouse</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-mens-kurta-07-12-22.webp" alt="" />
        <p>Mens Kurta</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-kidswear-07-12-22.webp" alt="" />
        <p>Kids Wear</p>
        </div>

        <div style={CardStyle}>
        <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/category/shop-express-shipping-07-12-22.webp" alt="" />
        <p>Ready To Ship</p>
        </div>
    </div>
    
    </div>
}
export default Card

