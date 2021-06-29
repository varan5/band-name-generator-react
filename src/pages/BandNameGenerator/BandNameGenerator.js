import React, { useState } from 'react'
import BandImage from '../../assets/images/band.png'

const BandNameGenerator = () => {
  const [cityName, setCityName] = useState('')
  const [petsName, setPetsName] = useState('')

  return (
    <div>
      <h3>Band Name Generator</h3>
      {cityName}
      {petsName}
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6 input-container">
              <input
                className="city-name-input"
                autoFocus
                placeholder="Enter your birth city name "
                value={cityName}
                onChange={(event) => setCityName(event.target.value)}
              />
              <input
                className="pets-name-input"
                placeholder="Enter your pet's name "
                value={petsName}
                onChange={(event) => setPetsName(event.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <img src={BandImage} alt="" />
    </div>
  )
}

export default BandNameGenerator
