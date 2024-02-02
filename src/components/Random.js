import React from 'react'

const Random = ({min, max}) => {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const number = randomNumber(min, max)

  return (
    <div className="random">
        <p>Random value between {min} and {max} is {number}</p>
    </div>
  )
}

export default Random
