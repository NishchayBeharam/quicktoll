import React from 'react'
import HeaderComp from './HeaderComp'
import VehicleDetail from './VehicleDetail'
import image from '../img/GJW115A1138.png'

const vehicleDetails = {
    registrationNumber: 'GJW115A1138',
    ownerName: 'Kanta Nagy',
    newBalance: '₹6340',
    vehicleMake: 'Mahindra',
    vehicleModel: 'XUV500',
    vehicleColor: 'Silver'
}


const StepFourS = ({stepFourSOpen,setStepFourSOpen}) => {
    if (stepFourSOpen) {
        return (
            <div className="stepContainer">
                <HeaderComp tittleText={"Vehicle Details"} descriptionText={"Owner was charged rs. 50"} />
                <div className="finalContent">
                    <div className="vehicleDetails">
                        <VehicleDetail vehicleDetailsLabel={"Registration Number"} vehicleDetailsvalue={vehicleDetails.registrationNumber} />
                        <VehicleDetail vehicleDetailsLabel={"Owner Name"} vehicleDetailsvalue={vehicleDetails.ownerName} />
                        <VehicleDetail vehicleDetailsLabel={"New Balance"} vehicleDetailsvalue={vehicleDetails.newBalance} />
                        <VehicleDetail vehicleDetailsLabel={"Vehicle Make"} vehicleDetailsvalue={vehicleDetails.vehicleMake} />
                        <VehicleDetail vehicleDetailsLabel={"Vehicle Model"} vehicleDetailsvalue={vehicleDetails.vehicleModel} />
                        <VehicleDetail vehicleDetailsLabel={"Vehicle Color"} vehicleDetailsvalue={vehicleDetails.vehicleColor} />
                    </div>
                    <div className="vehicleImage">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
          )
    } else {
        return (
            null
          )
    }
}

export default StepFourS