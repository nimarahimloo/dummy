import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Box, Typography} from "@mui/material";
import ZoomSlider from "./ZoomSlider";
import Image from "../components/Image";
import React, {useState} from "react";

/**
 * Home Slider Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomeSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
    <React.Fragment>
        <Swiper
            style={{
                "--swiper-navigation-color": "#002E6E",
                "--swiper-pagination-color": "#002E6E",
            }}
            loop
            spaceBetween={10}
            navigation
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            autoHeight
        >
            <SwiperSlide key={1}>
                <Box sx={{borderRadius: "20px"}}>
                    <ZoomSlider src={window.location.origin + "/assets/img/slide.jpg"} alt="slider" id="slider"/>
                </Box>
            </SwiperSlide>
            <SwiperSlide key={2}>
                <Box sx={{borderRadius: "20px", padding: "50px"}}>
                    <audio controls>
                        <source
                            src={window.location.origin + "/assets/sound/test.mp3"}
                            type="audio/mp3"/>
                    </audio>
                </Box>
            </SwiperSlide>
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
        >
            <SwiperSlide key={1}>
                <Image src={window.location.origin + "/assets/img/slide.jpg"}/>
            </SwiperSlide>
            <SwiperSlide key={2} style={{alignSelf:"center"}}>
                    <Typography variant="h3">
                        نمایه صوتی
                    </Typography>
            </SwiperSlide>
        </Swiper>
    </React.Fragment>
    );
}