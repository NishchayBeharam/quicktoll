import React, { useState } from 'react'
import './home.css'
import StepOne from './StepOne'
import StepTwoA from './StepTwoA'
import StepFourS from './StepFourS'
import axios from 'axios'

export const Home = () => {

    const [stepOneOpen, setStepOneOpen] = useState(true)
    const [stepTwoAOpen, setStepTwoAOpen] = useState(false)
    const [stepThreeAOpen, setStepThreeAOpen] = useState(false)
    const [stepFourSOpen, setStepFourSOpen] = useState(false)
    const [vehicleDetails, setVehicleDetails] = useState(null)
    const [error, setError] = useState('')

    const tempResponse = {
      registrationNumber: 'GJW115A1138',
      ownerName: 'Kanta Nagy',
      newBalance: '6340',
      vehicleMake: 'Mahindra',
      vehicleModel: 'XUV500',
      vehicleColor: 'Silver'
  }

    const [image, setImage] = useState(null)

    const getData = async () => {
      // const data = await axios.post('',{
      //   name: image.name
      // })
      setVehicleDetails(tempResponse)
      if (vehicleDetails) {
        setImage(null)
        setStepTwoAOpen(false)
        setStepFourSOpen(true)
      } else {
        setError('Invalid Registration')
      }
    }

    return (
    <div className="mainContainer">
        <StepOne stepOneOpen={stepOneOpen} setStepOneOpen={setStepOneOpen} stepTwoAOpen={stepTwoAOpen} setStepTwoAOpen={setStepTwoAOpen} error={error} setError={setError} />
        <StepTwoA setImage={setImage} image={image} stepOneOpen={stepOneOpen} setStepOneOpen={setStepOneOpen} stepTwoAOpen={stepTwoAOpen} setStepTwoAOpen={setStepTwoAOpen} stepThreeAOpen={stepThreeAOpen} setStepThreeAOpen={setStepThreeAOpen} stepFourSOpen={stepFourSOpen} setStepFourSOpen={setStepFourSOpen} getData={getData} error={error} setError={setError} />
        <StepFourS stepOneOpen={stepOneOpen} setStepOneOpen={setStepOneOpen} stepTwoAOpen={stepTwoAOpen} setStepTwoAOpen={setStepTwoAOpen} stepFourSOpen={stepFourSOpen} setStepFourSOpen={setStepFourSOpen} vehicleDetails={vehicleDetails} setVehicleDetails={setVehicleDetails} error={error} setError={setError} />
    </div>
  )
}