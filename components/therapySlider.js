/* eslint-disable prettier/prettier */
import { createRef, useState } from "react"
import Slider from "react-slick"
import TherapySliderItem from "./therapySliderItem"
import TherapyImg1 from "@/images/therapy-1.png"
import TherapyImg2 from "@/images/therapy-2.png"
import TherapyImg3 from "@/images/therapy-3.png"
import { useTranslation } from "next-i18next"

const TherapySlider = ({ items }) => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const slider = createRef()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (currentSlide) => {
      console.log(currentSlide)
      setCurrentIndex(currentSlide)
    },
  }

  const move = (direction) => {
    if (direction === "prev") {
      slider.current.slickPrev()
    } else {
      slider.current.slickNext()
    }
  }
  const getTherapyImage = (index) => {
    const therapyImages = [TherapyImg1, TherapyImg2, TherapyImg3]
    const imageIndex = index % therapyImages.length
    return therapyImages[imageIndex]
  }

  return (
    <>
      <div class="relative mb-[45px]">
        <Slider ref={slider} {...settings}>
          {new Array(9).fill(1)?.map((member, index) => (
            <TherapySliderItem
            // image={getTherapyImage(index)}
            title={t(`therapy_list.${index}.title`)}
            description={t(`therapy_list.${index}.description`)}
            image={`/images/therapy/${index + 1}.png`}
            key={index}
          />
          ))}
        </Slider>

        <button
          className="absolute top-[155px] -left-[60px] icon-up w-[46px] h-[46px] flex justify-center items-center rounded-full bg-white small-shadow"
          onClick={() => move("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M20 26L10 16L20 6"
              stroke="#A05956"
              stroke-opacity="0.33"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          className="absolute top-[155px] -right-[60px] icon-up w-[46px] h-[46px] flex justify-center items-center rounded-full bg-white small-shadow"
          onClick={() => move("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M12 6L22 16L12 26"
              stroke="#A05956"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default TherapySlider
