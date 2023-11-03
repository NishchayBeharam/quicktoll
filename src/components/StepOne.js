import React from 'react'
import HeaderComp from './HeaderComp'

const StepOne = ({stepOneOpen,setStepOneOpen,setStepTwoAOpen,setStepTwoBOpen}) => {

    const openStepTwoA = () => {
        setStepOneOpen(false)
        setStepTwoAOpen(true)
    }

    if (stepOneOpen) {
        return (
            <div className="stepContainer">
                <HeaderComp tittleText={"Select Option"} descriptionText={"Select method to charge toll"} />
                <div className="stepContent">
                    <div className="uploadImageButton" onClick={openStepTwoA}>
                        Upload Image to Charge Toll
                    </div>
                    {/* <div className="liveScanButton">
                        Use Camera to Charge Toll
                    </div> */}
                </div>
            </div>
          )
    } else {
        return (
            null
          )
    }
}

export default StepOne