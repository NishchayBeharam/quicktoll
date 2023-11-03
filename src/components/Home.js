import React, { useState } from 'react'
import './home.css'
import HeaderComp from './HeaderComp'
import StepOne from './StepOne'
import StepTwoA from './StepTwoA'
import StepTwoB from './StepTwoB'
import StepFourS from './StepFourS'
import StepThreeA from './StepThreeA'

export const Home = () => {

    const [stepOneOpen, setStepOneOpen] = useState(true)
    const [stepTwoAOpen, setStepTwoAOpen] = useState(false)
    const [stepTwoBOpen, setStepTwoBOpen] = useState(false)
    const [stepThreeAOpen, setStepThreeAOpen] = useState(false)
    const [stepThreeBOpen, setStepThreeBOpen] = useState(false)
    const [stepFourSOpen, setStepFourSOpen] = useState(false)
    const [stepFourUOpen, setStepFourUOpen] = useState(false)

    return (
    <div className="mainContainer">
        <StepOne stepOneOpen={stepOneOpen} setStepOneOpen={setStepOneOpen} stepTwoAOpen={stepTwoAOpen} setStepTwoAOpen={setStepTwoAOpen} />
        <StepTwoA stepOneOpen={stepOneOpen} setStepOneOpen={setStepOneOpen} stepTwoAOpen={stepTwoAOpen} setStepTwoAOpen={setStepTwoAOpen} stepThreeAOpen={stepThreeAOpen} setStepThreeAOpen={setStepThreeAOpen} />
        <StepThreeA stepThreeAOpen={stepThreeAOpen} setStepThreeAOpen={setStepThreeAOpen} />
        <StepFourS stepFourSOpen={stepFourSOpen} setStepFourSOpen={setStepFourSOpen} />
    </div>
  )
}