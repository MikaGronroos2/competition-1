import React from 'react'

const CreditCardBackup = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const cardData = [{
        "type":"Visa",
        "source":"../images/Visa_brandmark_Blue_RGB_2021.png",
        "alt":"Visa Card Logo"
    },
    {
        "type":"Master Card",
        "source":"../images/mc_symbol_opt_73_3x.png",
        "alt":"Master Card Logo"
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
    <div className="credit-card" style={{"background":bgColor, "color" : color}}>
    <div className="type">
        <img src={cardIcon.source}className="card--image" alt='Card'/>
    </div>
    <div className='number'>
        {hiddennumber}
    </div>
    <div className="expiration">
        Expires {expirationMonth} / {expirationYear}  {bank}
    </div>
    <div className="owner">
        {owner}
    </div>
    </div>
  )
}


export default CreditCardBackup;
