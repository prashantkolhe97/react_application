import './profilecard.css'


export function Profile(props) {
    const { productName, productId, Discription, image, } = props

    function Buttonclick() {
        alert('Product of is  #1 , WATCH FASTRACK has of rupees $30 is added in the cart , please proceed to pay !!!')
    }

    return (
        <div className='div'>
            <div className='text' >
                <img src={image} />
                <h3 className='head'>{productId}</h3>
                <h1 className='head1'>{productName}</h1>
                <p className='para'>{Discription}</p>
                <button className={props.externalClassName || 'btn'}
                    onClick={props.onClickFunction || Buttonclick}
                    style={props.buttonStyle}>Add To Card</button>
            </div>
        </div>
    )

}