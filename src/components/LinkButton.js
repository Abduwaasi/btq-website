import Link from "next/link"
import Image from "next/image"

function LinkButton({ text, icon, href, color, bg }) {
    return (
        <Link className={`bg-${bg} px-6 py-2 flex items-center space-x-2 rounded-3xl shadow-sm`} href={href}>
            <Image src={icon} width={18} height={18} alt="" />
            <span className={`text-${color} font-bold text-base leading-tight text-center`}>{text}</span>
        </Link>
    )
}

export default LinkButton