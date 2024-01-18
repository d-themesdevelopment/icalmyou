/* eslint-disable prettier/prettier */
import { useTranslation } from "next-i18next"

const CategoryBadgeCol = ({ catBg, catColor }) => {
    const { t } = useTranslation()
    return (
        <>
            <span class={`${catBg} py-[10px] px-[24px] absolute rounded-[33px] ${catColor} left-[16px] bottom-[16px] leading-none`}>{t("category")}</span>
        </>
    )
}

export default CategoryBadgeCol