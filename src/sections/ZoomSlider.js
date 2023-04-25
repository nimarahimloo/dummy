import React, { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {Box, Button} from "@mui/material";
import Image from "../components/Image";

const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
    <Box sx={{textAlign:"left"}}>
        <Button variant="contained" sx={{margin:"15px" , boxShadow:"unset" , padding:"10px !important"}} onClick={() => zoomIn()} key={1}>+</Button>
        <Button variant="contained" sx={{margin:"15px" , boxShadow:"unset" , padding:"10px !important"}} onClick={() => zoomOut()} key={2}>-</Button>
        <Button variant="contained" sx={{margin:"15px" , boxShadow:"unset" , padding:"10px !important"}} onClick={() => resetTransform()} key={3}>x</Button>
    </Box>
);

/**
 * Zoom Slider Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function ZoomSlider({src , id , alt}) {
    const transformComponentRef = useRef(null);

    const zoomToImage = (e) => {
        if (transformComponentRef.current) {
            const { zoomToElement } = transformComponentRef.current;
            zoomToElement("slide");
        }

    };
    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            ref={transformComponentRef}
        >
            {utils => <>
                <Controls {...utils} />
                <TransformComponent>
                    <Box onClick={zoomToImage}>
                        <Image src={src} alt={alt} id={id}/>
                    </Box>
                </TransformComponent>
            </>}
        </TransformWrapper>
    );
}
