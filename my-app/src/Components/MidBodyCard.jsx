
const MidBodyCard=()=>{

    const Container={
        border:'0px solid black', 
        width:'90%',
        height:'570px',
        marginLeft:'5%',
        marginTop:'2%',
        display:'flex',
    }
    const CardStyle={
        border:'0px solid red', 
        width:'29%',
        height:'570px',
        marginLeft:'3%',
        marginTop:'0%',
        
    }
    const imgStyle={
        width:'100%',
        height:'100%'
    }


    return <>
    <div style={Container}>
        <div style={CardStyle} >
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-christmas-collection.webp" alt=""/>
        </div>

        <div style={CardStyle} >
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-kidswear.webp" alt=""/>
        </div>

        <div style={CardStyle} >
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-readymade-suits.webp" alt=""/>
        </div>
    </div>

    <div style={Container} >
        <div style={CardStyle}>
                <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-bandhgala-jodhpuri.webp" alt="" />
        </div>
        <div style={{
              border:'1px solid red', 
              width:'62%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-heavy-sleeves-sarees.webp" alt="" />
        </div>
    </div>
    
    <div style={{
              border:'0px solid red', 
              width:'30%',
              height:'100px',
              marginLeft:'35%',
              marginTop:'3%',
        }}>
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/New-Season-Store.webp" alt="" />
        </div>


    <div style={Container} >
        <div style={{
              border:'0px solid red', 
              width:'50%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
                <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-jacket-style-collection.webp" alt="" />
        </div>

        <div style={{
              border:'0px solid red', 
              width:'50%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-pakistani-suits.webp" alt="" />
        </div>
    </div>

    <div style={Container} >
        <div style={{
              border:'0px solid red', 
              width:'25%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
                <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-accessories.webp" alt="" />
        </div>

        <div style={{
              border:'0px solid red', 
              width:'25%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
                <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-kundan-jewellery.webp" alt="" />
        </div>

        <div style={{
              border:'0px solid red', 
              width:'50%',
              height:'570px',
              marginLeft:'3%',
              marginTop:'0%',
        }}>
            <img style={imgStyle} src="https://assets.panashindia.com/media/wysiwyg/webp/homepage/shop-sequins-sarees.webp" alt="" />
        </div>
    </div>
    <hr/>
    </>
}
export default MidBodyCard