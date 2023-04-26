import { Fragment } from 'react';
import './App.css';
import { Profile } from './component/profilecard';

function App(props) {

  function product2(input) {
    alert('Product of is  #2 , SHOES REEBOK has of rupees $50 is added in the cart , please proceed to pay !!!')
  }

  function product3() {
    alert('Product of is  #3 , TSHIRT has of rupees $25 is added in the cart , please proceed to pay !!!')
  }
  function product4() {
    alert('Product of is  #4 , SUNGLASS has of rupees $22 is added in the cart , please proceed to pay !!!')
  }
  function product5() {
    alert('Product of is  #5 , JEANS has of rupees $35 is added in the cart , please proceed to pay !!!')
  }


  


  return (

    <Fragment>
      <div className='div1'>
      <Profile
         productName='WATCH FASTRACK'
        productId='#1'
        Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image='https://staticimg.titan.co.in/Fastrack/Catalog/3147KM01_1.jpg?impolicy=pqmed&imwidth=640' />
      <Profile
         productName='SHOES REEBOK'
         productId='#2'
         Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image='https://imagescdn.reebok.in/img/app/product/7/789293-9230837.jpg?auto=format&w=251.75'
        onClickFunction={product2}
      />
      <Profile 
        productName='TSHIRT'
        productId='#3'
        Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image='https://i.etsystatic.com/18580212/c/1365/1365/0/0/il/ff6470/1842590910/il_600x600.1842590910_94dg.jpg' 
        onClickFunction={product3} />
        <Profile 
        productName='SUNGLASS'
        productId='#4'
        Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNkPa6bEykxSAFxjx1AC2bNVTqX13hG2HK5x5zRQ3MGE03QxQc2gl8e2eG1QKVMkceZmcWePHHUjIc9DQw788QPNPvYFAd60S_AwzS-ms8zCL7wn2bMduc9g' 
        onClickFunction={product4} />
        <Profile 
        productName='JEANS'
        productId='#5'
        Discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image='https://5.imimg.com/data5/TK/PJ/UR/SELLER-92913534/jeans-500x500.jpg' 
        onClickFunction={product5} />
</div>
</Fragment>

  );
}

export default App;