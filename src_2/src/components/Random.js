import React from 'react'

const Random = ({min, max}) => {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const number = randomNumber(min, max)

  return (
    <div className="random">
        Random value between {min} and {max} =&gt; {number}
    </div>
  )
}

export default Random
