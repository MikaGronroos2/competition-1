import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const cardData = [{
        "type":"Visa",
        "source":"../images/Visa_brandmark_Blue_RGB_2021.png"
    },
    {
        "type":"Master Card",
        "source":"../images/mc_symbol_opt_73_3x.png"
    }
]

    const card = ({
    color: color,
    background: bgColor,
});
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
