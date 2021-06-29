import React, { useState } from 'react'
import BandImage from '../../assets/images/band.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BandNameGenerator = () => {
  const [cityName, setCityName] = useState('')
  const [petsName, setPetsName] = useState('')
  const [bandName, setBandName] = useState('')

  const handleButtonClick = (event) => {
    event.preventDefault()
    console.log('Button was clicked')

    if (cityName === '' && petsName === '') {
      toast.error("Kindly Enter City Name and Pet's Name!")
    } else if (cityName === '') {
      toast.error('Kindly Enter City Name!')
    } else if (petsName === '') {
      toast.error("Kindly Enter Pet's Name!")
    } else {
      toast.success(`Your Band Name is: ${cityName + petsName}`)
    }
  }

  return (
    <div>
      <h4>Band Name Generator</h4>
      <ToastContainer />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4 input-container offset-s4">
              <br />
              <br />
              <input
                className="city-name-input "
                autoFocus
                placeholder="Enter your birth city name "
                value={cityName}
                onChange={(event) => setCityName(event.target.value)}
              />
              <br />
              <br />
              <input
                className="pets-name-input"
                placeholder="Enter your pet's name "
                value={petsName}
                onChange={(event) => setPetsName(event.target.value)}
              />
            </div>
          </div>
          <a
            onClick={handleButtonClick}
            className="waves-effect waves-light btn"
          >
            Generate
          </a>
        </form>
      </div>

      <img
        src={BandImage}
        className="band-image"
        height="250px"
        width="300px"
        alt=""
      />
    </div>
  )
}

export default BandNameGenerator
