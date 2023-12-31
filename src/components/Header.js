import Link from "next/link"
import Image from "next/image"
import facebook from "../../public/images/facebook.png"
import instagram from "../../public/images/instagram.png"
import tiktok from "../../public/images/tiktok.png"
import phone from "../../public/images/phone.png"
import email from "../../public/images/email.png"

function Header() {
    return (
        <header className="bg-red w-full h-[66px] flex items-center justify-center px-4 lg:px-8 xl:px-16 ">
            <nav className="w-full h-full flex justify-between items-center max-w-[1900px] ">
                <div className="space-y-1  lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:space-y-0">
                    <div className="flex space-x-2 items-center">
                        <Image src={phone} width={20} height={20} alt="Phone Icon" />
                        <span className="text-white text-xs lg:text-base font-bold">08101411444  | 08134291031</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <Image src={email} width={20} height={20} alt="Email Icon" />
                        <span className="text-white text-base font-bold">hello@btqonline.com</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <a href="https://web.facebook.com/btqnigeria" target="_blank">
                        <Image src={facebook} width={20} height={20} alt="Facebook Icon" />
                    </a>
                    <a href="https://www.instagram.com/btqnigeria" target="_blank">
                        <Image src={instagram} width={20} height={20} alt="Instagram Icon" />
                    </a>
                    <a href="https://www.tiktok.com/@btqnigeria" target="_blank">
                        <Image src={tiktok} width={20} height={20} alt="Tiktok Icon" />
                    </a>

                </div>
            </nav>
        </header>
    )
}

export default Header