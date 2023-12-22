import Image from "next/image"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import frame from "../../public/images/frame.png"
import frame1 from "../../public/images/frame1.png"
function AppCarousel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },

    };
    return (

        <div className="w-full">
            <Carousel
                responsive={responsive}
                infinite={false}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}

            >
                <Image src={frame} className="w-full h-fit" />
                <Image src={frame1} className="w-full h-fit" />
            </Carousel>

        </div>
    )
}

export default AppCarousel