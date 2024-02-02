import React from 'react'

const CreditCardBackup = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const cardData = [{
        "type":"Visa",
        "source":"../images/Visa_brandmark_Blue_RGB_2021.png"
    },
    {
        "type":"Master Card",
        "source":"../images/mc_symbol_opt_73_3x.png"
    }]

    const cardIcon = cardData.find(thing => thing.type === type);
    console.log(cardIcon.source)

    function hideNumber(number) {
        const placeHolder = number;
        const slicedHolder = placeHolder.slice(12,16);
        const hidden = "•••• •••• •••• ";
        const result = hidden + slicedHolder
        console.log(result)
        return result;
    }
    const hiddennumber = hideNumber(number);

  return (
    <div className="credit-card">
        <img src={cardIcon.source}className="card--image"/>
        <p>{hiddennumber}</p>
        <p>Expires {expirationMonth} / {expirationYear}   {bank}</p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCardBackup;
