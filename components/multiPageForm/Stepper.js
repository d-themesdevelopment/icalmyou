import React from "react"

const Stepper = ({ totalSteps, currentStep }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1)

  return (
    <div className="flex space-x-2 mb-4">
      {steps.map((step, index) => (
        <div key={index}>
          {" "}
          {/* Add a unique key prop for each inner div */}
          <div
            className={`w-20 h-1 rounded-full ${
              step === currentStep ? "bg-[#818181]" : "bg-[#D9D9D9]"
            }`}
          />
        </div>
      ))}
    </div>
  )
}

export default Stepper
