import Page from "../components/Page";
import {
    Container,
} from "@mui/material";
import React from "react";
import 'swiper/css';
import 'swiper/css/virtual';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Information from "../sections/Information";
import HomeSlider from "../sections/HomeSlider";


/**
 * Dashboard Component
 * @returns {JSX.Element}
 * @constructor
 */

export default function Dashboard() {

    return (
        <Page title="داشبورد">
            <Container maxWidth="xl">
                <HomeSlider/>
                <Information/>
            </Container>
        </Page>
    )
}
