import React from 'react';
import './Card.css'
export default function Card(props) {

  function calculateTotal(item){
    let total=0;
    for(let i=1;i<item.length;i++){
      total+=item[i].price;
    }
    return <h5>Total : ${total}</h5>
  }

  return (    
        <div className='main'>
        <h4>Buyer:{props.item[0].buyerName}</h4>
        <h4>Seller:{props.item[0].sellerName}</h4>
        <h6>{props.item[1].name}</h6>
        <h6>${props.item[1].price}</h6>
        <h6>and some items...</h6>
        {
          calculateTotal(props.item)
        }
        <h5>Status :Not delivered</h5>
        </div>
     
  );
}


