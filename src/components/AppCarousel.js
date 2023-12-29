import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import frame from "../../public/images/frame.png"
import frame1 from "../../public/images/frame1.png"

const AppCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showStatus={false}
        >
            <Image src={frame} alt="BTQ hero slide 1" />
            <Image src={frame1} alt="BTQ hero slide 2" />
        </Carousel>
    )
}

export default AppCarousel