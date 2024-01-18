// components/Step2.js
import React, { useState } from "react"
import style from "./stepStyle2.module.css"

const Step2 = ({
  formData,
  setFormData,
  prevStep,
  nextStep,
  submitForm,
  index,
  totalSteps,
}) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, firstName: e.target.value })
    setSelectedOption(e.target.value)
  }

  const handlePrev = () => {
    prevStep()
  }
  const handleNext = () => {
    nextStep()
  }

  return (
    <div>
      <h1 className="text-black-0  text-[29px] -sm:text-[#2E2E2E] -sm:text-[18px]">
        Few Questions to get know you !
      </h1>
      <div className="flex flex-col mb-[90px] -sm:pb-[40px] bg-white text-[24px] text-[#2E2E2E] mt-10 py-[60px] px-[35px] gap gap-y-[20px]">
        <div className={``}>
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="option1"
            className={`mr-2.5 ${style.radio_input1} `}
            onChange={handleChange}
          />
          <label htmlFor="contactChoice1">Option 1 (Selected)</label>
        </div>

        <div className={`gap-[10px]`}>
          <input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="option2"
            className={`mr-2.5 ${style.radio_input1}`}
            onChange={handleChange}
          />
          <label htmlFor="contactChoice2">Option 2</label>
        </div>

        <div className={`gap-[10px]`}>
          <input
            type="radio"
            id="contactChoice3"
            name="contact"
            value="option3"
            className={`mr-2.5 ${style.radio_input1}`}
            onChange={handleChange}
          />
          <label htmlFor="contactChoice3">Option 3 (indeterminate)</label>
        </div>

        <div className={`gap-[10px]`}>
          <input
            type="radio"
            id="contactChoice4"
            name="contact"
            value="option4"
            className={`mr-2.5 ${style.radio_input1}`}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="contactChoice4">Option 4 (disabled)</label>
        </div>

        <div className={`gap-[10px]`}>
          <input
            type="radio"
            id="contactChoice5"
            name="contact"
            value="option5"
            className={`mr-2.5 ${style.radio_input1}`}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="contactChoice5">
            Option 5 (disabled and selected)
          </label>
        </div>

        <div className={`gap-[10px]`}>
          <input
            type="radio"
            id="contactChoice6"
            name="contact"
            value="option6"
            className={`mr-2.5 ${style.radio_input1}`}
            onChange={handleChange}
            disabled
          />
          <label htmlFor="contactChoice6">
            Option 6 (disabled indeterminate)
          </label>
        </div>
      </div>
      <div className="flex flex-row  justify-end gap-4 my-4 -sm:flex-col">
        <span className="order-1 -sm:order-3 flex gap-4 justify-center content-center items-center px-[23px] py-[10px]">
          <button
            className="text-[#202234] font-semibold text-base"
            onClick={index === totalSteps ? null : handleNext}
          >
            Skip it
          </button>
        </span>
        {index !== 1 && (
          <button
            onClick={handlePrev}
            className="order-2 -sm:order-2 bg-[#E6E6FA] border-[#BBBBF6] gap-[10px] border rounded-full text-[16px]
            px-[23px] py-[10px]"
          >
            Previous{" "}
          </button>
        )}
        <button
          className="order-3 -sm:order-1 bg-[#E6E6FA] gap-[10px] border rounded-full text-[16px] px-[23px] py-[10px] -sm:bg-[#BBBBF6]"
          onClick={index === totalSteps ? null : handleNext}
        >
          {totalSteps === index ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  )
}

export default Step2
