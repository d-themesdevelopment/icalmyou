// components/Step2.js
import React, { useState } from "react"

const Step2 = ({ formData, setFormData, prevStep, nextStep, submitForm }) => {
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
      <h1 className="text-black-0 text-[29px] -sm:text-[#2E2E2E] -sm:text-[18px]">
        What type of therapy are you looking for?
      </h1>
      <div className="flex flex-col">
        <div
          className={`${
            selectedOption === "option1" ? "bg-[#BBBBF6]" : "bg-white"
          } py-5 border rounded-full my-3`}
        >
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="option1"
            className="invisible"
            onChange={handleChange}
          />
          <label htmlFor="contactChoice1">
            Individual (what individual needs or requests as therapy)
          </label>
        </div>
        <div
          className={`${
            selectedOption === "option2" ? "bg-[#BBBBF6]" : "bg-white"
          } py-5 border rounded-full my-3`}
        >
          <input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="option2"
            className="invisible"
            onChange={handleChange}
          />
          <label htmlFor="contactChoice2">
            Couples (for myself and my partner)
          </label>
        </div>
        <div
          className={`${
            selectedOption === "option3" ? "bg-[#BBBBF6]" : "bg-white"
          } py-5 border rounded-full my-3`}
        >
          <input
            type="radio"
            id="contactChoice3"
            name="contact"
            value="option3"
            className="invisible"
            onChange={handleChange}
          />
          <label className="w-full" htmlFor="contactChoice3">
            Teen (for my child)
          </label>
        </div>
      </div>
      <div className="flex flex-row  justify-end gap-4 my-4 -sm:flex-col">
        <span className="order-1 -sm:order-3 flex gap-4 justify-center content-center items-center px-[23px] py-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M11.25 15.125L5.625 9.5L11.25 3.875"
              stroke="#818181"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button onClick={handlePrev}>Previous</button>
        </span>

        <button
          onClick={handleNext}
          className="order-2 -sm:order-2 bg-[#E6E6FA] border-[#BBBBF6] gap-[10px] border rounded-full text-[16px]
            px-[23px] py-[10px]"
        >
          skip and let me look for my therapist
        </button>
        <button
          className="order-3 -sm:order-1 bg-[#E6E6FA] gap-[10px] border rounded-full text-[16px] px-[23px] py-[10px] -sm:bg-[#BBBBF6]"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Step2
