/* eslint-disable prettier/prettier */
import Link from "next/link";

const LinkPageButton = ({ href, text, type, color, border, }) => {
  return (
    <Link href={href} className={`rounded-[40px] bg-[#E6E6FA]  border-[1px] border-[#BBBBF6] inline-flex justify-center items-center py-[30px] px-[40px] text-[19px] md:text-[20px] text-[#202234] leading-none font-medium text-center font-poppinsSemiBold relative z-10 `}>
      <span className="relative inline-flex justify-center items-center tracking-[0.5px]">
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#202234" className="ml-[15px]">
          <path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" stroke="#202234" stroke-width="1" />
        </svg>
      </span>
    </Link>
  );
};

export default LinkPageButton;
