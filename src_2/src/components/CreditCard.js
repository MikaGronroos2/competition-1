import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    let cardData;

    const card = ({
    color: color,
    background: bgColor,
})
  return (
    <div className="credit-card" style={card}>
        <img className="card--image"/>
        <p>{number}</p>
        <p>Expires {expirationMonth} / {expirationYear}   {bank}</p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard
