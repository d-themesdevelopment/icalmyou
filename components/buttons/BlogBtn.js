/* eslint-disable prettier/prettier */
import Link from "next/link"

const LinkPageButton = ({ href, text, type, color, border, arrow }) => {
  return (
    <Link
      href={href}
      style={{ width: 'fit-content' }}
      className={`rounded-[40px] bg-[#E6E6FA]  border-[1px] border-[#BBBBF6] inline-flex justify-center items-center py-[16px] px-[19px] text-[19px] md:text-[16px] text-[#202234] leading-none font-medium text-center font-poppinsSemiBold relative z-10 `}
    >
      <span className="relative inline-flex justify-center items-center tracking-[0.5px]">
        {text}
        {!arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#202234"
            className="ml-[15px]"
          >
            <path
              d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z"
              stroke="#202234"
              strokeWidth="1" // Use strokeWidth instead of stroke-width
            />
          </svg>
        )}
      </span>
    </Link>
  )
}

export default LinkPageButton
